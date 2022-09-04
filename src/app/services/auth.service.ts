import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/auth`;

  constructor(private httClient: HttpClient) { }

  login(email: string, password: string){
    return this.httClient.post(`${this.apiUrl}/login`,{email, password});
  }

  profile(){
    return this.httClient.get(`${this.apiUrl}/profile`);
  }
}
