
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";


@Injectable({

  providedIn: 'root'

})
export class UserService {


  users: User[] = [
    {
      id: 1,
      name: 'Tim',
      email: 'avan@mail.com',
      password: '123',
      birthday: '15/01/2002'
    },
    {
      id: 2,
      name: 'Wessel',
      email: 'mail@mail.test',
      password: '123',
      birthday: '15/01/2002'

    },
  ]

  public add(user: User): void {
    user.id = this.users.length + 1;
    this.users.push(user);
  }
  public get(): User[] {
    return this.users;
  }
  public getByid(id: any): User {
    return this.users.filter((user) => user.id == id)[0]
  }
  public delete(id: any): void {
    console.log(id)
    console.log('we zijn wel hier')
    this.users.splice(id - 1);
  }
  public edit(id: any, user: User): void {
    user.id = id
    this.users[id - 1] = user;
  }
}