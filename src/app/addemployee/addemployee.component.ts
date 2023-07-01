import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  employee: Employee=new Employee();
  constructor(private employeeservice: EmployeeserviceService,private router: Router){}
  saveemployee(){
    
    this.employeeservice.addEmployee(this.employee).subscribe( data=>{
      
      this.gotoemployelist();
    },
    error=>console.log(error));
    

  }
  gotoemployelist(){
    this.router.navigate(['/employeelist']);
  }
  onSubmit(){
    this.saveemployee();
  }

}
