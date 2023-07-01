import { Component,OnInit } from '@angular/core';

import { EmployeeserviceService } from '../employeeservice.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employees: Employee[] = [];
  // id:number| null=null;
  
  constructor(private employeeservice: EmployeeserviceService,private router: Router,private route:ActivatedRoute){}
  ngOnInit():void{
    this.getEmployees();
  
  }
  private getEmployees(){
    this.employeeservice.getEmployeesList().subscribe(data=>{
      this.employees=data;
    });

  }
  updateemployee(id:number | null=null){
    this.router.navigate(['updateemployee',id]);
  }

  deleteEmployee(id:number| null=null){
    // this.id=this.route.snapshot.params['id'];
    this.employeeservice.deleteEmployee(id).subscribe( data => {

      console.log(data);
      this.getEmployees();
    })
    

  }
  employeeDetails(id:number|null=null){
    this.router.navigate(['employeedetails', id]);
    

  }

}
