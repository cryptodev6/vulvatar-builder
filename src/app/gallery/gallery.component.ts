import { Component, OnInit } from '@angular/core';
import { MockLoginService } from '../shared/services/mock-login.service';
import { ToastrService } from 'ngx-toastr';
import { ImageBuilderService } from '../shared/services/image-builder.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  isLoading: boolean = false;
  user: any;
  isDropdownActive: boolean = false;
  allVulvavatars: any = [];
  API_URL: string;
  selectedOption: string = 'NUEVAS OPCIONES';
  
  constructor(
    public mockLoginService: MockLoginService,
    public imageBuilderService: ImageBuilderService,
    private toastr: ToastrService
  ) {
    this.API_URL = environment.apiUrl;
    
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
     return userData.fullName;
    }
    return '';
  }
  selectOption(option: string) {
    this.selectedOption = option;
    switch (option) {
      case 'TODA':
        this.initializeData();
        break;
      case 'MÁS POPULAR':
        this.handleButtonClick();
        break;
      case 'MÁS RECIENTE':
        this.handleRecentClick();
        break;
      default:
        // Handle default case or error
        break;
    }
    this.isDropdownActive = false;
  }

  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
  }

  vote(_id: number) { 
    this.isLoading = true;
    const payload = {
      vulvavatarId: _id
    };
    this.mockLoginService.voteForContest(payload).subscribe(
      response => {
        console.log(response);
        if(response.status === 1){
          this.toastr.success(response.message, 'Success');
          this.mockLoginService.showModal = true;
          this.ngOnInit();
          this.isLoading = false;
        }
        else {
          this.toastr.error(response.message, 'Error');
          this.isLoading = false;
        }
      },
      error => {
        const errmsg = error.error.error || error.error.message || 'Something went wrong';
        this.toastr.error(errmsg, 'Error');
        this.isLoading = false;

      }
    );
  }


  initializeData() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.imageBuilderService.getAllVulvavatars().subscribe(
      response => {
        console.log(response);
        if(response.status === 1){
          this.allVulvavatars = response.data.vulvavatars;
        this.isLoading = false;

        }
        else {
          this.toastr.error(response.message, 'Error');
        this.isLoading = false;

        }
      },
      error => {
        const errmsg = error.error.error || error.error.message || 'Something went wrong';
        this.toastr.error(errmsg, 'Error');
        this.isLoading = false;

      }
    );
  }

  handleButtonClick() {
    this.isLoading = true;

    this.imageBuilderService.getFilteredVulvavatars().subscribe(
      response => {
        console.log(response);
        if(response.status === 1){
          this.allVulvavatars = response.data.vulvavatars;
        this.isLoading = false;

        }
        else {
          this.toastr.error(response.message, 'Error');
        this.isLoading = false;

        }
      },
      error => {
        // Handle API error
        console.error(error);
        this.isLoading = false;

      }
    );
  }

  
  handleRecentClick() {
    this.isLoading = true;

    this.imageBuilderService.getFilteredRecentVulvavatars().subscribe(
      response => {
        console.log(response);
        if(response.status === 1){
          this.allVulvavatars = response.data.vulvavatars;
        this.isLoading = false;

        }
        else {
          this.toastr.error(response.message, 'Error');
        this.isLoading = false;

        }
      },
      error => {
        // Handle API error
        console.error(error);
        this.isLoading = false;

      }
    );
  }
  

  encodeURI(uri: string): string {
    return encodeURIComponent(uri);
  }
}
