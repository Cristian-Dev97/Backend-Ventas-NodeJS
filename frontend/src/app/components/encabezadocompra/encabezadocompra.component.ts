import { Component, OnInit} from '@angular/core';
import {  encabezadocompra } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-encabezadocompra',
  templateUrl: './encabezadocompra.component.html',
  styleUrls: ['./encabezadocompra.component.css']
})
export class EncabezadocompraComponent implements OnInit{

  TUser: any = [];
  user: encabezadocompra = {
      num_compra: null,
      idempresa: null,
      idsuc: null,
      idprov: null,
      userid: null,
      idfpago: null,
      fecha_compra: null,
      estado: 'Activo'
    }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/encabezadocompra')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }
}
