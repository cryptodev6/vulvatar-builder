import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockLoginService } from '../services/mock-login.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;
const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email : string) {
  const isValidEmail = emailRegexPattern.test(email);
  return isValidEmail
}


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupComponent {
  
  showSignupForm: boolean = false;
  showSigninForm: boolean = true;
  name : string
  email: string;
  password: string;
  confirm_password : string ;
  errorMessage: string;

  constructor(private http: HttpClient , public mockLoginService : MockLoginService , private toastr: ToastrService) { }


  handleShowSignin(): void {
    this.showSigninForm = true;
    this.showSignupForm = false;
  }

  handleShowSignup(): void {
    this.showSignupForm = true;
    this.showSigninForm = false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  login(): void {
    this.errorMessage = '';
    if(!this.email){
      this.toastr.error('Email is required!', 'Error');
    }
    else if (!isValidEmail(this.email)){
      this.toastr.error('Invalid Email address!', 'Error');
    }
    else if (!this.password){
      this.toastr.error('Password is required!', 'Error');
    }
    else{
    const payload = {email: this.email, password: this.password}
    this.http.post<any>(`${apiUrl}/login`, payload)
      .subscribe(
        response => {
         if(response.status === 1){
            const { token, user } = response.data;
          this.toastr.success(response.message, 'Success');
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          this.mockLoginService.showModal = false
          }
          else{
            this.toastr.error(response.message, 'Error');
          }
        },
        error => {
          const errmsg = error.error.error || error.error.message || 'Login failed'
          this.toastr.error(errmsg, 'Error');
        }
      );
  }
  }

  signup(): void {
    this.errorMessage = '';
    if(!this.name){
      this.toastr.error('Name is required!', 'Error');
    }
   else if(!this.email){
      this.toastr.error('Email is required!', 'Error');
    }
    else if (!isValidEmail(this.email)){
      this.toastr.error('Invalid Email address!', 'Error');
    }
    else if (!this.password){
      this.toastr.error('Password is required!', 'Error');
    }
    else if (!this.confirm_password){
      this.toastr.error('Confirm password is required!', 'Error');
    }
    else if(this.password !== this.confirm_password){
      this.toastr.error('Passwords do NOT match!', 'Error');
    }
    else{
    const payload = {
      name : this.name , email: this.email, password: this.password , confirm_password : this.confirm_password 
    }
    this.http.post<any>(`${apiUrl}/sign-up`, payload)
      .subscribe(
        response => {
           if(response.status === 1){
            this.toastr.success(response.message, 'Success');
            this.mockLoginService.showModal = false
           }
           else{
            this.toastr.error(response.message, 'Error');
           }
        },
        error => {
          const errmsg = error.error.error || error.error.message || 'Registration failed'
          this.toastr.error(errmsg, 'Error');
        }
      );
    }
  }
}