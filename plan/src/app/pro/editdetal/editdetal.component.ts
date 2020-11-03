import { Component, OnInit } from '@angular/core';
import { IPro } from 'src/app/admin/pro/pro.model';
import { PlanService } from 'src/app/plan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editdetal',
  templateUrl: './editdetal.component.html',
  styleUrls: ['./editdetal.component.css']
})
export class EditdetalComponent implements OnInit {

  constructor(private productService:PlanService,private router:Router) { }


  p_item= new IPro(null,null,null,null,null,null,null,)
  ngOnInit() {

this.p_item=this.productService.getPro();

  }
  editDetails(product){
    this.productService.update(product)
    .subscribe((result)=>{
      if(JSON.parse(JSON.stringify(result)).status=="Success"){
        this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
          this.router.navigate(['product'])
        })
      }
      else{
        alert("Error");
      }
    })
  }

}

