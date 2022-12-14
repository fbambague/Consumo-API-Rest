import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FilesService } from 'src/app/services/files.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  token: string = '';
  imgRta = '';

  constructor(private userService: UsersService,
              private authService: AuthService,
              private filesService: FilesService) { }

  ngOnInit(): void {
  }

  createUser(){
    this.userService.createUser({
      name: 'cris',
      email: 'cronaldo@mail.com',
      password: 'siuuuuuuu'
    }).subscribe(
      (data => {console.log('data: ', data)}),
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  login(){
    this.authService.login('cronaldo@mail.com','siuuuuuuu').subscribe(
      (data => {
        console.log('data: ',data.access_token)
        this.token = data.access_token;
      }),
      (error: HttpErrorResponse)=>{alert(error.message)}
    );
  }

  getProfile(){
    this.authService.profile().subscribe(
      (data => {
        console.log(data);
      }),
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  downloadPDF(){
    this.filesService.getFile('my.pdf','./assets/files/texto.txt','application/pdf')
    .subscribe()
  }

  onUploap(event: Event){
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if(file){
      this.filesService.uploadFile(file).subscribe(
        (rta)=>{
          this.imgRta = rta.location;
        }
      );
    }
  }

}
