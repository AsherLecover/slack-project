import { Component, OnInit, Injectable } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, map } from 'rxjs/operators';
import { UserModel } from 'src/app/models/users-model';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from 'src/app/servises/users.service';
import { MassagesService } from 'src/app/servises/massages.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean;
  ctrl: FormControl;

  userArr$: Observable<any>;
  userIsInList: boolean = false
  userImg: string = ''




  constructor(private fb: FormBuilder,
    private fs: AngularFirestore,
    private UsersSVC: UsersService,
    private MassagesSVC: MassagesService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.userArr$ = this.UsersSVC.users2$;

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    this.userArr$.pipe(tap(res => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].email == this.registerForm.value.email &&
          res[i].password == this.registerForm.value.password) {
          this.userIsInList = true
          this.UsersSVC.userInList = true
          this.MassagesSVC.userId = res[i].id
          this.MassagesSVC.name = res[i].name
          this.MassagesSVC.userImg = res[i].img
          this.router.navigate(['/app-main-chat-room'])
        }
        
      }
    })).subscribe()
    // this.registerForm.reset()
  }
}

@Injectable({ providedIn: 'root' })
export class LogInGuardService implements CanActivate {

  constructor(public router: Router, private userSVC: UsersService) { }
  canActivate(): boolean {
    console.log('out', this.userSVC.userInList);

    if (this.userSVC.userInList) {
      console.log('in', this.userSVC.userInList);
      return true
    }
    else {
      alert("You Entered Worng UserName Or Password\n Try Agian Plaese");

      return false
    }
  }

}

