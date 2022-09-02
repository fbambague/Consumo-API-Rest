import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changImg(newImg: string){
    this.img = newImg;
    console.log('Change img: =>', this.img);
  }

  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png'
  //counter=0;
  //counterFn: number | undefined;

  constructor() {
    // Before Render
    // No correr cosas asincronas como fecth, subcribe -> Corre solo una vez
    console.log('Constructor','imgValue => ',this.img);
   }

  ngOnInit(): void {
    // Before Render
    // Se puede correr llamadas asincronas(donde se puede esperar un tiempo), llamadas a un API -> Corre una vez
    console.log('Constructor','ngOnInit => ',this.img);
    /*this.counterFn = window.setInterval(()=>{
      this.counter += 1;
      console.log('runner')
    },1000);
    */
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Before and during Render
    // Actualiza cambios en imputs -> Corre muchas veces
    console.log('Constructor','ngOnChanges => ',this.img);
    console.log('changes',changes);
  }

  ngAfterViewInit(): void {
    // After render
    // Handler children
    console.log('Constructor','ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // Delete component
    console.log('Constructor','ngOnDestroy  ');
    //window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('load hijo');
    this.loaded.emit(this.img);
  }

}
