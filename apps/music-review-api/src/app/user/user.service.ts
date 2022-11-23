import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User as UserModel, UserDocument } from './user.schema';

import { User, UserInfo } from '@music-review-app/data';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel.name) private userModel: Model<UserDocument>) { }

  async getAll(): Promise<UserInfo[]> {
    return this.userModel.aggregate([

      {
        $addFields: {
          reviews: {
            $let: {
              vars: { user: '$_id' },
              in: {
                $map: {
                  input: {
                    $filter: {
                      input: '$meetups',
                      as: 'meetup',
                      cond: { $and: [{ $eq: ['$$meetup.tutorRef', '$$user'] }, { $gt: ['$$meetup.review', null] }] }
                    }
                  },
                  as: 'meetup',
                  in: {
                    rating: '$$meetup.review.rating',
                  },
                }
              },
            }
          },
        }
      },
      {
        $addFields: {
          rating: { $avg: '$reviews.rating' },
        }
      },
      {
        $project: {
          _id: 0,
          __v: 0,
          meetups: 0,
          reviews: 0,
        }
      },
    ]);
  }

  async getOne(userId: string): Promise<User | null> {
    const users = await this.userModel.aggregate([
      {
        $match: {
          id: userId,
        }
      },

      {
        $project: {
          _id: 0,
          __v: 0,
          meetups: 0,
          'reviews.tutor._id': 0,
          'reviews.pupil._id': 0,
        }
      },
    ]);

    return users[0];
  }
}
