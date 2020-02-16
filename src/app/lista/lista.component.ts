import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {


  dataSongs: object[] = [

    {"titulo": 'Pharrell Williams - Happy',  "URL": 'cancion/0', "caratula":'assets/Happy.jpg'},
    {"titulo": 'The Weeknd - Starboy',  "URL":'cancion/1', "caratula":'assets/Starboy.jpg'},
    {"titulo": 'RedBone - Come and get your love', "URL":'cancion/2', "caratula":'assets/RedBone_Come_and_get.jpg'},
    {"titulo": 'Muse - Undisclosed desires', "URL":'cancion/3', "caratula":'assets/Undisclosed_desires.jpg'}
  ];



  constructor(public _route: ActivatedRoute){


  }



}
