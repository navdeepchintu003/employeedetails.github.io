import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:Register=new Register();
  msg='';
  constructor(private employeeservice: EmployeeserviceService,private router:Router){}
  onSubmit()
  {
    this.employeeservice.register(this.user).subscribe(data=>{
      console.log("rec");
      this.router.navigate(['/login']);
    },
    error=>{
      this.msg="Please enter valid emailid and password"
      
    })
  }
  ngOnInit(): void {

  }
}

