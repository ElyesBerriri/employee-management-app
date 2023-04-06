import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { LoadingService } from '../_services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = true;
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username?: string;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private loadingService: LoadingService) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoading = false;
      this.isLoggedIn = true;
      const user = this.tokenStorage.getUser();
      this.username = user.username;
      this.roles = user.roles;
    }else {
      this.loadingService.getHealth().subscribe({
        next: () => {this.isLoading = true;},
        error: async() => {
          await new Promise(f => setTimeout(f, 10000));
          window.location.reload();
        }
      });
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        window.location.assign('home');
      },
      err => {
        if(err.error)this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
