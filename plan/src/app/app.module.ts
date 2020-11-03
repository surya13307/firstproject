import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './common/home/home.component';
import { ProlistComponent } from './common/prolist/prolist.component';
import { AddetalComponent } from './pro/addetal/addetal.component';
import { EditdetalComponent } from './pro/editdetal/editdetal.component';
import { ProComponent } from './common/pro/pro.component';
import { LoginComponent } from './admin/login/login.component';
import { ListComponent } from './admin/list/list.component';
import { PrologComponent } from './pro/prolog/prolog.component';
import { SignupComponent } from './pro/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AngularWebStorageModule} from 'angular-web-storage';
import { PlanService } from './plan.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProlistComponent,
    AddetalComponent,
    EditdetalComponent,
    ProComponent,
    LoginComponent,
    ListComponent,
    PrologComponent,SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,AngularWebStorageModule
  ],
  providers: [PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
