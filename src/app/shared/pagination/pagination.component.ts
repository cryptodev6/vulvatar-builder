import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockLoginService } from '../services/mock-login.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent {
    // user: any;
    // isNavActive: boolean = false;
}