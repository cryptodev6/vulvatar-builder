import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockLoginService } from '../shared/services/mock-login.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  constructor(private router: Router , public mockLoginService : MockLoginService) {
  }

  ngOnInit(): void {
  }

  redirectToAnotherRoute() {
    this.router.navigate(['/image-builder']);
  }

}
