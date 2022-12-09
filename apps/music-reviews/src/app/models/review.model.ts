import { User } from "./user.model";

export interface Review {
    _id?: string,
    title: string,
    review: string,
    rating: number,
    userId?: string,
    userName?: string
}