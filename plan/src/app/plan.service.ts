import { Injectable } from '@angular/core';
import { IPro } from './admin/pro/pro.model';
import { Router } from '@angular/router';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor( private http:HttpClient,private router:Router) { }
product=new IPro(null,null,null,null,null,null,null,);



   
getPro(){
  console.log(this.product);
  return this.product;
 
   
}
setPro(product){
this.product=product;

}
getProList(){
  return this.http.get('http://localhost:3000/product');
}
newPro(item){
          return this.http.post("http://localhost:3000/insert",{"product":item})
          .subscribe(data=>{console.log(data)})
}
update(product)
{
  return this.http.post("http://localhost:3000/update", product);
}
delete(id){
  return this.http.post("http://localhost:3000/delete",{id:id});

}
signup(model){
  return this.http.post("http://localhost:3000/signup", model);
}
login(login) {
  
  return this.http.post("http://localhost:3000/login", login);
}
adminlogin(admin) {
  
  return this.http.post("http://localhost:3000/adminlogin", admin);
}
}
