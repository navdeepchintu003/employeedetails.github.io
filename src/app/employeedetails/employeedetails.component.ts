import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent {
  id: number| null=null;
  employee: Employee=new Employee();
  constructor(private route: ActivatedRoute, private employeservice: EmployeeserviceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeservice.getEmployeeByid(this.id).subscribe( data => {
      this.employee = data;
    });
  }

}
