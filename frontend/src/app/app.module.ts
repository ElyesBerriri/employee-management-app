import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { AddEmployeeModalComponent } from './add-employee-modal/add-employee-modal.component';
import { EditEmployeeModalComponent } from './edit-employee-modal/edit-employee-modal.component';
import { DeleteEmployeeModalComponent } from './delete-employee-modal/delete-employee-modal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    ListComponent,
    AddEmployeeModalComponent,
    EditEmployeeModalComponent,
    DeleteEmployeeModalComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders,UsersComponent,ListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
