import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {


dataSongs :object[] = this._data.getListaCanciones();

  constructor(public _route: ActivatedRoute, public _data : DataService){


  }



}
