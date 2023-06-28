import { Component, OnInit } from '@angular/core';
import { MockLoginService } from '../shared/services/mock-login.service';
import { ToastrService } from 'ngx-toastr';
import { ImageBuilderService } from '../shared/services/image-builder.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  user: any;
  isDropdownActive: boolean = false;
  allVulvavatars : any =[]
  
  constructor(
    public mockLoginService : MockLoginService,
    public imageBuilderService : ImageBuilderService,
     private toastr: ToastrService
     ) {
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

  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
  }

  vote(_id : number) { 
    const payload = {
      vulvavatarId: _id
    };
    this.mockLoginService.voteForContest(payload).subscribe(
      response => {
        console.log(response);
        if(response.status === 1){
          this.toastr.success(response.message, 'Success');
          this.mockLoginService.showModal = true
          this.ngOnInit()
        }
        else {
          this.toastr.error(response.message, 'Error');
        }
      },
      error => {
        const errmsg = error.error.error || error.error.message || 'Somthing went wrong'
        this.toastr.error(errmsg, 'Error');
      }
    );
  }

  ngOnInit(): void {
    this.imageBuilderService.getAllVulvavatars().subscribe(
      response => {
        console.log(response);
        if(response.status === 1){
          this.allVulvavatars = response.data
        }
        else {
          this.toastr.error(response.message, 'Error');
        }
      },
      error => {
        const errmsg = error.error.error || error.error.message || 'Somthing went wrong'
        this.toastr.error(errmsg, 'Error');
      }
    );
  }

}
