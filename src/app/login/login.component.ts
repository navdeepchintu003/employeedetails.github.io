import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user:Register=new Register();
  msg='';
  constructor(private employeeservice: EmployeeserviceService,private router:Router){}
  onSubmit(){
    this.employeeservice.login(this.user).subscribe(data=>{
      console.log("rec");
      this.router.navigate(['/employeelist']);
    },
    error=>{
      this.msg="Please enter valid emailid and password"
      
    })
  
    
    
    
  }
  ngOnInit(): void {
    
      
  }
}
