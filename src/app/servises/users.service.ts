import { Injectable } from '@angular/core';
import { UserModel } from '../models/users-model';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class UsersService {


  usersArr: UserModel[] = [];
  users$ = new BehaviorSubject<UserModel[]>(this.usersArr);
  users2$: Observable<any> = this.fs.collection('users').valueChanges();
  userInList: boolean = false



  constructor(private fs: AngularFirestore) {
  }

  addUser(user: UserModel) {
    this.usersArr.push(user);
    this.users$.next(this.usersArr);
  }
  getList(): Observable<UserModel[]> {
    return this.users$.asObservable();
  }





}