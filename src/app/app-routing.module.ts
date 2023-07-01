import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'employeelist',component:EmployeelistComponent},
  {path: '', redirectTo: 'employeelist', pathMatch: 'full'},
  {path:'addemployee',component:AddemployeeComponent},
  {path:'updateemployee/:id',component:UpdateemployeeComponent},
  {path:'employeedetails/:id',component:EmployeedetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
