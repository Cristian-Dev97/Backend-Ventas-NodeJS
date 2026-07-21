import { Component, OnInit } from '@angular/core';
import {  sucursales } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {
  
  TUser: any = [];
  user: sucursales = {
    idsuc: null,
    idempresa: null,
    sucursal: null,
    dirsuc: null,
    telefono: null,
    estado: 'Activo'
  }

  Empresalist: any;


  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListEmpresa();
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/sucursales')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }

  getDropListEmpresa() {
    this.Data.getDropListEmpresa().subscribe((data:any)=>{
      this.Empresalist=data;
    })
  }

}
