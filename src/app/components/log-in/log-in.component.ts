import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';

import { UserModel } from '../../models/users-model';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { UsersService } from '../../servises/users.service';
import { MassagesService } from '../../servises/massages.service';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  ctrl: FormControl;
  users$: Observable<any>;
  name: string;

  constructor(
    private fb: FormBuilder,
    private fs: AngularFirestore,
    private svc: UsersService,
    private MassagesSVC: MassagesService
  ) { }

  ngOnInit(): void {
    this.users$ = this.fs.collection('users').valueChanges();
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
    this.name = this.registerForm.value.userName;
    this.MassagesSVC.name = this.registerForm.value.userName;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.submitted = true;
      this.svc.userInList = true;
      this.addUser({
        id: Math.floor(Math.random() * 10000000),
        name: this.registerForm.value.userName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        img: 'https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.0-9/60348869_10214248270536232_8767458307741843456_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=Q97WJfb227oAX8bvQHA&_nc_oc=AQnVQI_SPBC11ZggnLJ5doa2I9YX4U7X18om4Gz-ITPLcCGQGC9Z9ZGuohSWwk_7s8o&_nc_ht=scontent.fsdv1-2.fna&oh=f7fe092ac8a0c9a6b2b4906f734acbcb&oe=5F5D5A6C',
      });
    }
    this.MassagesSVC.userImg = 'https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.0-9/60348869_10214248270536232_8767458307741843456_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=Q97WJfb227oAX8bvQHA&_nc_oc=AQnVQI_SPBC11ZggnLJ5doa2I9YX4U7X18om4Gz-ITPLcCGQGC9Z9ZGuohSWwk_7s8o&_nc_ht=scontent.fsdv1-2.fna&oh=f7fe092ac8a0c9a6b2b4906f734acbcb&oe=5F5D5A6C'
  }

  addUser(user: UserModel) {
    console.log(user);

    this.fs.collection('users').add(user);
    this.svc.addUser(user);
  }
}
