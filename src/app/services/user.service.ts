import { Injectable } from "@angular/core";
import { User } from "../models/User";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private readonly users: User[] = [];

  constructor() {
    this.users = [
      {
        firstName: "Alex",
        lastName: "Koblosh",
        age: 31,
        image: "https://placeimg.com/600/600/people/5",
        isActive: true,
        email: "Alex@gmail.com",
        balance: 100,
        registered: new Date("1/1/2018 8:30"),
        hide: true,
      },
      {
        firstName: "Alex1",
        lastName: "Koblosh1",
        age: 32,
        image: "https://placeimg.com/600/600/people/6",
        isActive: true,
        email: "Alex1@gmail.com",
        balance: 10,
        registered: new Date("1/1/2017 8:30"),
        hide: true,
      },
      {
        firstName: "Alex2",
        lastName: "Koblosh2",
        image: "https://placeimg.com/600/600/people/7",
        age: 22,
        email: "Alex2@gmail.com",
        balance: 10,
        registered: new Date("1/1/2021 8:30"),
        hide: true,
      },
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
