import { Component, Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  @Input()
  emp: Employee;

  constructor(private list: ListComponent) {
    this.emp = {
      "id": 0,
      "name": "hello",
      "email": "hello.world@gmail.com",
      "jobTitle": "world",
      "phone": "12345678",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Unknown_Member.jpg"
    };
  }

  public onOpenModal(mode: string): void {
    if (mode === 'edit'){
      this.list.editEmployee = this.emp;
    }
    else if (mode === 'delete'){
      this.list.deleteEmployee = this.emp;
    }
  }
}
