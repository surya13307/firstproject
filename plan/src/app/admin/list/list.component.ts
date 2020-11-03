import { Component, OnInit } from '@angular/core';
import { IPro } from '../pro/pro.model';
import { PlanService } from 'src/app/plan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  

 
    pros:IPro[];

    constructor(private proObject:PlanService, private  router:Router) { }
  
    ngOnInit() {
  
  
  this.proObject.getProList().subscribe((data)=>{
    this.pros=JSON.parse(JSON.stringify(data));
  })
    }
  
    // products: any[]=
    // this.productObject.getProducts();
  editPro(item){
    this.proObject.setPro(item);
    this.router.navigate(['editpro']);
  }
  
  deletePro(id){
    this.proObject.delete(id)
    .subscribe((result)=>{
      if(JSON.parse(JSON.stringify(result)).status=="success"){
        this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
          this.router.navigate(['superuser/list'])
        })
      }
    })
  }

  
    
  
  }
  