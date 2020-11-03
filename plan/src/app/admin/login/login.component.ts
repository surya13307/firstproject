import { Component, OnInit } from '@angular/core';
import { Login } from './login.model';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanService } from 'src/app/plan.service';
import { IPro } from '../pro/pro.model';



const key = "AdminStatus";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  admin = new Login(null, null);
  status1: String;
  constructor(public local: LocalStorageService, private pcService: PlanService, private router: Router
    , private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  get f() { return this.registerForm.controls; }
  

  adminlogin() {
    //alert("done");
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }


    this.admin.email = this.registerForm.get("email").value;
    this.admin.password = this.registerForm.get("password").value;
    console.log(this.admin);
    this.pcService.adminlogin(this.admin)
      .subscribe((result) => {
        this.status1 = JSON.parse(JSON.stringify(result)).AdminStatus;
        console.log(this.status1);
        if (this.status1 == "Success") {
          this.local.set(key, this.status1);
          console.log(this.local);
          alert("Login successfully")
          this.router.navigate(['superuser/list']);
        }
        else {
          alert(this.status1);
        }


      });
  }
    onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}


