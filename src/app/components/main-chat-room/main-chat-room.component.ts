import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servises/users.service';
import { Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { UserModel } from 'src/app/models/users-model';
import { AngularFirestore } from '@angular/fire/firestore';
import { MesseagesModel } from '../../models/massages-model';
import { MassagesService } from '../../servises/massages.service'

@Component({
  selector: 'app-main-chat-room',
  templateUrl: './main-chat-room.component.html',
  styleUrls: ['./main-chat-room.component.css'],
})
export class MainChatRoomComponent implements OnInit {
  userArr$: Observable<any>;
  masseageArr$: Observable<any>;
  imgSrc: string = '';
  date = new Date();
  messagePlaceholder: string = ''

  clinetId: number
  userId: number
  name: string
  arr = []




  constructor(private svc: UsersService,
    private fs: AngularFirestore,
    private MassagesSVC: MassagesService
  ) { }

  ngOnInit(): void {
    this.userArr$ = this.fs.collection('users').valueChanges();
    this.masseageArr$ = this.fs.collection('masseages').valueChanges();

    this.masseageArr$.pipe(map(res => {
      let arr = []
      for (let i of res) {
        arr.push(i)
      }
      this.arr = arr

    })).subscribe()

    this.userId = this.MassagesSVC.userId;
    this.name = this.MassagesSVC.name
    console.log("this.userId", this.userId);
  }

  get sortData() {

    return this.arr.sort((a, b) => {
      return a.time - b.time
    });
  }

  get sortData2() {
    return this.arr.sort((a, b) => {
      return <any>new Date(a.time) - <any>new Date(b.time);
    });
  }


  clickUser(user: UserModel) {
    this.imgSrc = user.img;
    this.MassagesSVC.clinetId = user.id;
    this.clinetId = user.id
    console.log("clinetId: ", this.clinetId);

    this.messagePlaceholder = `Message ${user.name}`
  }

  addMassege(massege) {

    this.fs.collection('masseages').add({
      clinetId: this.MassagesSVC.clinetId,
      userId: this.MassagesSVC.userId,
      massege: massege,
      time: this.date
    });

  }
}
