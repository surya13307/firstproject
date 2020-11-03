import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/plan.service';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/admin/login/login.model';
const key = "Status";
@Component({
  selector: 'app-prolog',
  templateUrl: './prolog.component.html',
  styleUrls: ['./prolog.component.css']
})
export class PrologComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  user = new Login(null, null);
  status: String;

  constructor(public local: LocalStorageService, private productService: PlanService, private router: Router
    , private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });


  }

  get f() { return this.registerForm.controls; }

  login() {
    //alert("done");
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }


    this.user.email = this.registerForm.get("email").value;
    this.user.password = this.registerForm.get("password").value;
    console.log(this.user);
    this.productService.login(this.user)
      .subscribe((result) => {
        this.status = JSON.parse(JSON.stringify(result)).Status;
        console.log(this.status);
        if (this.status == "Success") {
          this.local.set(key, this.status);
          console.log(this.local);
          this.router.navigate(['']);
        }
        else {
          alert(this.status);
        }

      });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  log(){
    this.local.remove(key);
    this.router.navigate(['']);
  }
  

}
