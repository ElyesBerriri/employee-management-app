import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-delete-employee-modal',
  templateUrl: './delete-employee-modal.component.html',
  styleUrls: ['./delete-employee-modal.component.css']
})
export class DeleteEmployeeModalComponent {

  constructor(private employeeService: EmployeeService, public list: ListComponent){}

  public onDeleteEmployee(employeeId: number | undefined) : void {
    if(employeeId){
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        this.list.getEmployees();
        this.list.getAllEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )}
  }
}
