import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  redirectTo: string = '/introduction';

  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigateByUrl(this.redirectTo);
    }, 3000);
  }

  ngOnInit(): void {
  }

}
