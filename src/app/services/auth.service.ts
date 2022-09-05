import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/auth`;

  constructor(private httClient: HttpClient) { }

  login(email: string, password: string){
    return this.httClient.post<Auth>(`${this.apiUrl}/login`,{email, password});
  }

  profile(token: string){
    /*const headers = new HttpHeaders();
    headers.set('Authorization', `Bearer ${token}`)*/
    return this.httClient.get<User>(`${this.apiUrl}/profile`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}