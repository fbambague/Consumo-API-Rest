import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/auth`;

  constructor(private httClient: HttpClient,
              private tokenService: TokenService) { }

  login(email: string, password: string){
    return this.httClient.post<Auth>(`${this.apiUrl}/login`,{email, password})
      .pipe(
        tap(response => this.tokenService.saveToken(response.access_token))//No hay problema porque es asincrono
      );
  }

  profile(/*token: string*/){
    /*const headers = new HttpHeaders();
    headers.set('Authorization', `Bearer ${token}`)*/
    return this.httClient.get<User>(`${this.apiUrl}/profile`,{
//      headers: {
        //Authorization: `Bearer ${token}`
//      }
    });
  }
}
