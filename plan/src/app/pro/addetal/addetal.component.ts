import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/plan.service';
import { IPro } from 'src/app/admin/pro/pro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addetal',
  templateUrl: './addetal.component.html',
  styleUrls: ['./addetal.component.css']
})
export class AddetalComponent implements OnInit {

  constructor(private plan: PlanService, private router: Router) { 
    console.log("Initialised");
  }

  p_item= new IPro(null,null,null,null,null,null,null);

  ngOnInit() {
  }
addDetails(){
  console.log(this.p_item)
  this.plan.newPro(this.p_item);
  alert("successs")
  this.router.navigate(['superuser/list'])
}
}