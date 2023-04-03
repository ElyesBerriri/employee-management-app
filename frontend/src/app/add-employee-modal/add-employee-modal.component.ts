import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../_models/employee';
import { EmployeeService } from '../_services/employee.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.css']
})
export class AddEmployeeModalComponent {

  constructor(private employeeService: EmployeeService, private list: ListComponent){}

  public onAddEmployee(addForm: NgForm) : void {
    document.getElementById('add-employee-form')?.click();
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        this.list.getEmployees();
        this.list.getAllEmployees();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
  }
}
