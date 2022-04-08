import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule } from '@angular/forms';
import { NewStudentComponent } from './student-list/new-student/new-student.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentListComponent,
    NewStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
