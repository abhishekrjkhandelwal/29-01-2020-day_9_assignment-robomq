import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }


  registerForm: FormGroup;
  submitted: false;
  invalidRegister = false;

  name = '';
  email = '';
  password = '';
  mobileno = '';


  onSubmit() {
    if (this.registerForm.valid) {
      this.http.post('http://localhost:3000/register', this.registerForm.value)
      .subscribe((response) => {
        console.log('repsonse ', response);
      });
    }
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      email : ['', Validators.compose( [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}')])],
      password: ['', Validators.required,  Validators.pattern( '^((\\+91-?)|0)?[0-9]{10}$')],
      name: ['', Validators.required, Validators.pattern( '[a-zA-Z ]*')],
      mobileno: ['', Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')],
    });
  }
}
