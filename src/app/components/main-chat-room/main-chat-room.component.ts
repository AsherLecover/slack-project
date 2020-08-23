import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, Input } from '@angular/core';
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
export class MainChatRoomComponent implements OnInit, AfterViewChecked {
  userArr$: Observable<any>;
  masseageArr$: Observable<any>;
  masseageArr2$: Observable<any>;
  imgSrc: string = '';
  date = new Date();
  messagePlaceholder: string = ''
  userImg: string = ''

  clinetId: number
  userId: number
  name: string
  arr = []
  arr2 = []
  count = 0
  resiverName: string = ''
  container: HTMLElement;







  constructor(private svc: UsersService,
    private fs: AngularFirestore,
    private MassagesSVC: MassagesService
  ) { }

  ngOnInit(): void {

    this.userArr$ = this.fs.collection('users').valueChanges();
    this.masseageArr2$ = this.fs.collection('messages').valueChanges();

    //------------------------------------

    this.masseageArr2$.pipe(map(res => {
      let arr2 = []
      let temp = res[0].count;
      for (let i of res) {
        if (i.count >= temp) {
          temp = i.count
          this.count = temp
        }
        arr2.push(i)
      }
      this.arr2 = arr2
    })).subscribe()


    this.userId = this.MassagesSVC.userId;
    this.name = this.MassagesSVC.name
    this.userImg = this.MassagesSVC.userImg

    console.log("this.userId", this.userId);
  }

  scrollToBottom(): void {
    this.container = document.getElementById("conversation");
    this.container.scrollTop = this.container.scrollHeight;

  }


  ngAfterViewChecked() {
    console.log("scrool:::::");
    this.scrollToBottom();
  }


  get sortData2() {
    return this.arr2.sort((a, b) => {
      return a.count - b.count;
    });
  }


  clickUser(user: UserModel) {
    this.imgSrc = user.img;
    this.MassagesSVC.clinetId = user.id;
    this.clinetId = user.id
    console.log("clinetId: ", this.clinetId);

    this.messagePlaceholder = `Message ${user.name}`
    this.resiverName = user.name
  }

  addMassege(massege) {
    this.count++

    this.fs.collection('messages').add({
      count: this.count,
      clinetId: this.MassagesSVC.clinetId,
      userId: this.MassagesSVC.userId,
      massege: massege,
      time: this.date
    });
    this.count++
  }
  

 

 
}
