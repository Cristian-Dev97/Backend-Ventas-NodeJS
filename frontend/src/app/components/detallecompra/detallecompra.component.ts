import { Component, OnInit } from '@angular/core';
import {  detallecompra } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-detallecompra',
  templateUrl: './detallecompra.component.html',
  styleUrls: ['./detallecompra.component.css']
})
export class DetallecompraComponent implements OnInit{

  TUser: any = [];
  user: detallecompra = {
      iddetcomp: null,
      idempresa: null,
      idsuc: null,
      num_compra: null,
      num_prod: null,
      cantidad: null,
      precio: null,
      subtotal: null,
      isv: null,
      total: null,
      estado: 'Activo'
  }


  constructor(private Data: DataService) { }

    ngOnInit(): void {
      this.getUser();
    }
    getUser() {
      this.Data.getAll('/detallecompra')
        .subscribe(res => {
            this.TUser = res;
          
          }, err => console.error(err));
    }

      AgregarValor(){
      delete this.user.iddetcomp;   
      this.Data.save(this.user,'/detallecompra')
        .subscribe(
          res => {

  this.getUser();
          },
          err => console.error(err)
        );
  }
    EliminarData(id: number){
      this.Data.delete(id, '/detallecompra')
        .subscribe(
          res => {
            this.getUser();
          },
          err => console.error(err)
        );
    }
}
