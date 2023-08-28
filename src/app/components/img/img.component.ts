import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  //Con el siguiente codigo estamos evidenciando cual input fue el que cambio porque cuando usamos el onChange evidenciamos un cambio general con este codigo puntualizamos donde se genro el cambio
  img: string = '';
  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img =>', this.img);
  }

  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/loading.jpg';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    //before render
    // NO async , solo se crea una vez
    console.log('constructor', 'imgValue =>', this.img);

  }

  ngOnChanges(changes: SimpleChanges) {//Con onChanges escuchasmos TODOS los cambios que se realizaron,  pero si queremos saber en donde especificamente se presento un cambio debemos volver el input un set


    //Corre antes y durante en el render, siemrpe que detecte cambios en el Input, está para eso, para detectar los cambios.
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void{
    //corre antes pero tiene la condicion que solo correo una vez. Se corren eventos asincronos.
    // console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(()=>{
    //   this.counter += 1;
    //   console.log('run counter')
    // }, 1000); //Si no se detiene de forma manual sigue corriendo el proceso
  }

  ngAfterViewInit(): void {
      //Corre despues que todo este renderizado, cuando los hijos de ese componentes se han renderizado
      console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
      //Corre cuando se elimina el componente, dejamos de ver el componente en la interfaz
      console.log('ngOnDestroy');
      // window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img = this.imageDefault;
  }


  imgLoaded(){
    console.log('Loaded hijo');
    this.loaded.emit(this.img);
  }
}
