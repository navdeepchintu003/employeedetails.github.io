import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpclient: HttpClient){}
  getEmployeesList(): Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(`${this.baseURL}`);
  }
  addEmployee(employee: Employee): Observable<object>{

    return this.httpclient.post(`${this.baseURL}`,employee);
  }
  getEmployeeByid(id:number|null=null): Observable<Employee>{
    return this.httpclient.get<Employee>(`${this.baseURL}/${id}`);
  }
  updateemployee(id:number| null=null,employee: Employee):Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`,employee);
  }
  deleteEmployee(id: number | null=null): Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
  login(user:Register): Observable<any>{
    return this.httpclient.post<any>("http://localhost:8084/api/v1/login",user);
  }
  register(user:Register): Observable<any>{
    return this.httpclient.post<any>("http://localhost:8084/api/v1/register",user);
  }
}
