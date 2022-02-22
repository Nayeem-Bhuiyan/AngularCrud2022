import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertComponent } from './Components/Employee/insert/insert.component';
import { UpdateComponent } from './Components/Employee/update/update.component';
import { ListComponent } from './Components/Employee/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoPageFoundComponent } from './Components/Common/no-page-found/no-page-found.component';
import { EmployeeModule } from './Modules/employee/employee.module';
import { DetailsComponent } from './Components/Employee/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    UpdateComponent,
    ListComponent,
    NoPageFoundComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    EmployeeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
