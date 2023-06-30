import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
const apiUrl = environment.apiUrl;
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupModalComponent {
  showPopup: boolean = true;
  name : string
  email: string;
  password: string;
  errorMessage: string;

  constructor(private http: HttpClient) {}

  login(): void {
    this.errorMessage = ''; // Clear previous error message

    // Call the login API
    this.http.post<any>(`${apiUrl}/sign-up`, {name :  this.name , email: this.email, password: this.password })
      .subscribe(
        response => {
          // Handle successful login
          console.log("response" , response);
          const { token, user } = response;
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          this.closePopup();
        },
        error => {
          // Handle login error
          console.log(error);
          this.errorMessage = error.error.message || 'Login failed'; // Display the error message to the user
        }
      );
  }

  closePopup(): void {
    this.showPopup = false;
  }
}