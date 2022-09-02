import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;

  //https://media.istockphoto.com/photos/anfield-stadium-the-home-ground-of-liverpool-fc-picture-id1032395842

  onLoaded(img: string){
    console.log('log padre', img);
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }

}
