import { Component, Input } from '@angular/core';
import { Employee } from '../_models/employee';
import { EmployeeService } from '../_services/employee.service';
import { ListComponent } from '../list/list.component';
import { User } from '../_models/user';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  @Input()
  emp: Employee;
  @Input()
  user: User;
  @Input()
  isUser: boolean;

  constructor(private list: ListComponent, private users: UsersComponent) {

    this.isUser = false;

    this.emp = {
      "id": 0,
      "name": "hello",
      "email": "hello.world@gmail.com",
      "jobTitle": "world",
      "phone": "12345678",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Unknown_Member.jpg"
    };

    this.user = {
      "id": 0,
      "username": "hello",
      "email": "hello.world@gmail.com",
      "roles": [],
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

  public onDelete(): void {
    this.users.onDeleteUser(this.user.id);
  }
}
