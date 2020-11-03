import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { ListComponent } from './admin/list/list.component';
import { ProlistComponent } from './common/prolist/prolist.component';
import { ProComponent } from './common/pro/pro.component';
import { PrologComponent } from './pro/prolog/prolog.component';
import { SignupComponent } from './pro/signup/signup.component';
import { EditdetalComponent } from './pro/editdetal/editdetal.component';
import { AddetalComponent } from './pro/addetal/addetal.component';



const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'superuser',component:LoginComponent},
 {path:'superuser/list',component:ListComponent},
 {path:'prolist',component:ProlistComponent},
 {path:'prolist/:id',component:ProComponent},
 {path:'login',component:PrologComponent},
 {path:'sign',component:SignupComponent},
 {path:'editpro',component:EditdetalComponent},
 {path:'addpro',component:AddetalComponent},




 
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
