import { Component } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users: User[] = [];
  public deleteUser: User | undefined;

  constructor(private userService: UserService){}

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        window.location.assign('login');
      }
    );
  }

  public onDeleteUser(userId: number | undefined) : void {
    if(userId){
    this.userService.deleteUser(userId).subscribe(
      (response: void) => {
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )}
  }
}
