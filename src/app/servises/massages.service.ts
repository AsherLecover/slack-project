import { Injectable } from '@angular/core';
import { MesseagesModel } from '../models/massages-model';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MassagesService {
  massageArr: MesseagesModel[] = [];
  massages$ = new BehaviorSubject<MesseagesModel[]>(this.massageArr);

  userId: number = 0;
  clinetId: number = 0;
  name: string = ''

  constructor() { }

  addUser(user: MesseagesModel) {
    this.massageArr.push(user);
    this.massages$.next(this.massageArr);
  }
  getList(): Observable<MesseagesModel[]> {
    return this.massages$.asObservable();
  }
}
