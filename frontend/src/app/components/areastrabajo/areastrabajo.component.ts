import { Component, OnInit } from '@angular/core';
import {  areastrabajo } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-areastrabajo',
  templateUrl: './areastrabajo.component.html',
  styleUrls: ['./areastrabajo.component.css']
})
export class AreastrabajoComponent implements OnInit {
    TUser: any = [];
    valorInput: number | undefined;
    user: areastrabajo = {
    idarea: null,
    idempresa: null,
    idsuc: null,
    area: null,
    fecha_creacion: null,
    estado: 'Activo'
    }

  constructor(private Data: DataService) { }

    ngOnInit(): void {
      this.getUser();
    }
    getUser() {
      this.Data.getAll('/areastrabajo')
        .subscribe(res => {
            this.TUser = res;
          
          }, err => console.error(err));
    }

      AgregarValor(){
    delete this.user.idarea;   
    this.Data.save(this.user,'/areastrabajo')
       .subscribe(
         res => {

    this.getUser();
            },
            err => console.error(err)
          );
    }

      EliminarData(id: number){
        this.Data.delete(id, '/areastrabajo')
          .subscribe(
            res => {
              this.getUser();
            },
            err => console.error(err)
          );
      }

}
