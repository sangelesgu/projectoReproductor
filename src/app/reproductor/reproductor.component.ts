import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent {


  indice: string = "";

  dataSongs: object[] = [

    { "titulo": 'Starboy', "archivo": "/assets/Starboy.mp3", "caratula":'assets/Starboy.jpg'},
    { "titulo": 'Happy', "archivo": "/assets/Happy.mp3", "caratula": 'assets/Happy.jpg'},
    { "title": 'Come and get Your love', "archivo": "/assets/Come and get your love.mp3", "caratula":'assets/RedBone_Come_and_get.jpg'},
    { "titulo": 'Undisclose disers', "archivo": "/assets/Undisclosed desires.mp3", "caratula": 'assets/Undisclosed_desires.jpg'}
  ];



  constructor(public _route: ActivatedRoute) {

    this.indice = _route.snapshot.params["cancion"];


  }



}
