import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges{

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/loading.jpg';

  constructor() {
    //before render
    // NO async , solo se crea una vez
    console.log('constructor', 'imgValue =>', this.img);

  }

  ngOnChanges() {
    //before render
    //Actualiza los cambios en los input ,  corre tantas veces como actualizaciones tengamos en los input
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void{

  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('Loaded hijo');
    this.loaded.emit(this.img);
  }
}
