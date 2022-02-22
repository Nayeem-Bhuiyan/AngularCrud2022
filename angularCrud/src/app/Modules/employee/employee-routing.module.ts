import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from 'src/app/Components/Common/no-page-found/no-page-found.component';
import { DetailsComponent } from 'src/app/Components/Employee/details/details.component';
import { InsertComponent } from 'src/app/Components/Employee/insert/insert.component';
import { ListComponent } from 'src/app/Components/Employee/list/list.component';
import { UpdateComponent } from 'src/app/Components/Employee/update/update.component';

const routes: Routes = [
  { path: '', redirectTo: '/EmpList', pathMatch: 'full' },
  { path: 'EmpList', component: ListComponent },
  { path: 'EmpInsert', component: InsertComponent },
  { path: 'EmpEdit/:id', component: UpdateComponent },
  { path: 'EmpDetails/:id', component: DetailsComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
