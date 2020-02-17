import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private  dataSongs: object[] = [

    { "titulo": 'Starboy',
    "archivo": "/assets/Starboy.mp3",
    "caratula":'/assets/Starboy.jpg',
    "URL": 'song/0'},

    { "titulo": 'Happy',
    "archivo": "/assets/Happy.mp3",
    "caratula": '/assets/Happy.jpg',
    "URL": 'song/1'},

    { "titulo": 'Come and get Your love',
    "archivo": "/assets/Come and get your love.mp3",
    "caratula":'/assets/RedBone_Come_and_get.jpg',
     "URL": 'song/2'},

    { "titulo": 'Undisclose desires',
     "archivo": "/assets/Undisclosed desires.mp3",
     "caratula": '/assets/Undisclosed_desires.jpg',
     "URL": 'song/3'}
  ];

  getListaCanciones(){

    return this.dataSongs

  }

  setListaCanciones(nuevoValor) {

    this.dataSongs = nuevoValor;

  }

  constructor() { }
}
