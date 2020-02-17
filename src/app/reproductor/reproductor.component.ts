import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent {


  indice: string = "";

  dataSongs :object[] = this._data.getListaCanciones();



  constructor(public _route: ActivatedRoute, public _data: DataService) {

    this.indice = _route.snapshot.params["cancion"];


  }



}
