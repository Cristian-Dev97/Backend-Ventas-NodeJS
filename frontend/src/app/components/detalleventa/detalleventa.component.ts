import { Component, OnInit } from '@angular/core';
import {  detalleventa } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-detalleventa',
  templateUrl: './detalleventa.component.html',
  styleUrls: ['./detalleventa.component.css']
})
export class DetalleventaComponent implements OnInit{

  TUser: any = [];
  user: detalleventa = {
      iddetventa: null,
      idempresa: null,
      idsuc: null,
      num_clie: null,
      num_venta: null,
      num_prod: null,
      cantidad: null,
      precio: null,
      isv: null,
      descuento: null,
      total: null,
      estado: 'Activo'
  }

  constructor(private Data: DataService) { }

    ngOnInit(): void {
      this.getUser();
    }
    getUser() {
      this.Data.getAll('/detalleventa')
        .subscribe(res => {
            this.TUser = res;
          
          }, err => console.error(err));
    }

        AgregarValor(){
        delete this.user.iddetventa;   
        this.Data.save(this.user,'/detalleventa')
          .subscribe(
            res => {

    this.getUser();
            },
            err => console.error(err)
          );
    }
      EliminarData(id: number){
        this.Data.delete(id, '/detalleventa')
          .subscribe(
            res => {
              this.getUser();
            },
            err => console.error(err)
          );
      }

}
