import { Component, OnInit } from '@angular/core';
import { IPro } from 'src/app/admin/pro/pro.model';
import { PlanService } from 'src/app/plan.service';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
const key = "Status";

@Component({
  selector: 'app-prolist',
  templateUrl: './prolist.component.html',
  styleUrls: ['./prolist.component.css']
})
export class ProlistComponent implements OnInit {

  products:IPro[];

  constructor(private productObject:PlanService, private  router:Router , public local: LocalStorageService) { }

  ngOnInit() {
    if (this.local.get(key) != "Success") {
      this.router.navigate(['']);
      alert("Login first!!!")
    } else{

this.productObject.getProList().subscribe((data)=>{
  this.products=JSON.parse(JSON.stringify(data));
})
    }
  }
  flipped = false;
  name: String="More Details";
  // imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH"

  flipIt() {

 
 
     // alert("hfhg");
     if(this.flipped==false){
       this.flipped=true;
       this.name="Less Details"
      }
      else{
        this.flipped=false;
        this.name="More Details"
      }
  }
}