import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from '../_models/employee';
import { EmployeeService } from '../_services/employee.service';
import { ListComponent } from '../list/list.component';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-edit-employee-modal',
  templateUrl: './edit-employee-modal.component.html',
  styleUrls: ['./edit-employee-modal.component.css']
})
export class EditEmployeeModalComponent {

  constructor(private employeeService: EmployeeService, public list: ListComponent, private tokenStorageService: TokenStorageService){}

  public onUpdateEmployee(employee: Employee) : void {
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        this.list.getEmployees();
        this.list.getAllEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.tokenStorageService.signOut();
        window.location.assign('login');
      }
    )
  }
}
