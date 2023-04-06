import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { LoadingService } from '../_services/loading.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading = environment.production;
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private loadingService: LoadingService) { }
  
  ngOnInit(): void {
    this.loadingService.getHealth().subscribe({
      next: () => { this.isLoading = false; },
      error: async () => {
        await new Promise(f => setTimeout(f, 10000));
        window.location.reload();
      }
    });
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        window.location.assign('login');
      },
      err => {
        if(err.error)this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
