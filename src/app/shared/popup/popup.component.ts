import { Component } from '@angular/core';
import { MockLoginService } from '../services/mock-login.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  showPopup: boolean = true;
  username: string;
  password: string;

  constructor(private mockLoginService: MockLoginService) {}

  login(): void {
    this.mockLoginService.login(this.username, this.password)
      .then((isAuthenticated) => {
        if (isAuthenticated) {
          this.closePopup();
        } else {
          console.log('Invalid username or password');
        }
      });
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
