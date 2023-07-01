import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit{
  employee: Employee=new Employee();
  id:number | null=null;
  constructor(private employeeservice:EmployeeserviceService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeservice.getEmployeeByid(this.id).subscribe(data=>{
      this.employee=data;
    },
    error=>console.log(error));
      
  }
  onSubmit(){
    this.employeeservice.updateemployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employeelist']);
  }


}
