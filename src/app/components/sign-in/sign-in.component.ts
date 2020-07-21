import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  ctrl: FormControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      }); 
  }

  onSubmit() {
    console.log("(this.submitted",this.submitted)
    if (this.registerForm.valid) {
      this.submitted = true;
      console.log(this.submitted)
    }
  }

}
