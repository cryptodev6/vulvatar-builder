

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ImageBuilderService {
  private apiUrl = environment.apiUrl 
 
  constructor(private http: HttpClient) {
    // Set the authorization header with the provided token
  }

  uploadShareImage(payload: any): Observable<any> {
    const jwtToken = localStorage.getItem('token')
    const headers = {
      'authorization' : jwtToken,
      }
    return this.http.post<any>(`${this.apiUrl}/vulvavatars`, payload,  {headers} );
  }

  getAllVulvavatars(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all-vulvavatars?limit=40&page=1`, );
  }

  getFilteredVulvavatars(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/filtered-vulvavatars?orderBy=voteCount&sortOrder=DESC&limit=40&page=1`, );
  }

  getFilteredRecentVulvavatars(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/filtered-vulvavatars?orderBy=createdAt&sortOrder=DESC&limit=40&page=1`, );
  }

}

