import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CreateUserDTO } from '../dto/createUserDTO.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `${environment.API_URL}/api/users`;

  constructor(private httClient: HttpClient) { }

  createUser(user: CreateUserDTO){
    return this.httClient.post<User>(this.apiUrl,user);
  }

  getAllUser(){
    return this.httClient.get<User[]>(this.apiUrl);
  }

}
