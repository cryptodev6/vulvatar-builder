

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MockLoginService {
  private apiUrl = environment.apiUrl 
  showModal : boolean = false
  
  constructor(private http: HttpClient) {
    // Set the authorization header with the provided token
  }

  voteForContest(payload: any): Observable<any> {
    const jwtToken = localStorage.getItem('token')
    const headers = {
      'authorization' : jwtToken,
      }
    return this.http.post<any>(`${this.apiUrl}/contest/vote`, payload,  {headers} );
  }
}

