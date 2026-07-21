import { Component, OnInit } from '@angular/core';
import {  encabezadoventa } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-encabezadoventa',
  templateUrl: './encabezadoventa.component.html',
  styleUrls: ['./encabezadoventa.component.css']
})
export class EncabezadoventaComponent implements OnInit{

  TUser: any = [];
  user: encabezadoventa = {
      num_venta: null,
      idempresa: null,
      idsuc: null,
      num_clie: null,
      userid: null,
      idfpago: null,
      fecha_venta: null,
      estado: 'Activo'
  }

constructor(private Data: DataService) { }

    ngOnInit(): void {
      this.getUser();
    }
    getUser() {
      this.Data.getAll('/encabezadoventa')
        .subscribe(res => {
            this.TUser = res;
          
          }, err => console.error(err));
    }
}
