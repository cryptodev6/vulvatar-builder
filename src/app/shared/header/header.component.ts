import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockLoginService } from '../services/mock-login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
    user: any;
    isNavActive: boolean = false;

  constructor(public mockLoginService : MockLoginService) {

    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
    }
   }
   
   isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getUserName(): string {
    const userString = localStorage.getItem('user');
    if (userString) {
     let userData = JSON.parse(userString);
     return userData.fullName
    }
    
  }

  toggleNav() {
    this.isNavActive = !this.isNavActive;
  }

  handleLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.isNavActive = false;
  }
  handleLoginModal(){
    this.mockLoginService.showModal = true
    this.isNavActive = false;
  }
}