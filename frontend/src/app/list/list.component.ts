import { Component, OnInit } from '@angular/core';
import { Employee } from '../_models/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../_services/employee.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{

  public employees: Employee[] = [];
  public editEmployee: Employee | undefined ;
  public deleteEmployee: Employee | undefined;
  public allEmployees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private tokenStorageService: TokenStorageService){}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.tokenStorageService.signOut();
        window.location.assign('login');
      }
    );
  }

  public getAllEmployees(): Employee[] {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.allEmployees=response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.tokenStorageService.signOut();
        window.location.assign('login');
      }
    );
    return this.allEmployees;
  }
  
  public searchEmployees(key: string): void{
    const results: Employee[] = [];
    for (const employee of this.getAllEmployees()){
      if(employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1)
        results.push(employee);
    }
    this.employees = results;
  }
}

