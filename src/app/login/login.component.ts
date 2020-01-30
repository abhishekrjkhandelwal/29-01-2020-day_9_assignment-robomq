import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  submitted: false;
  invalidLogin = false;

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    if (this.loginForm.controls.email.value === 'abhishek@gmail.com' && this.loginForm.controls.password.value === 'password') {
      console.log('pass');
    } else {
      this.invalidLogin = true;
    }
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required, Validators.pattern( '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      password: ['', Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,16}$')]
    });
  }
}
