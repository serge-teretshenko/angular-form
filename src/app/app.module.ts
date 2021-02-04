import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    FormComponent, 
    UsersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [FormComponent, UsersComponent]
})
export class AppModule { }