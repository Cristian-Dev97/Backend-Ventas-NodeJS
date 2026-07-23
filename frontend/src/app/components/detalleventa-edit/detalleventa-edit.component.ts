import { Component,OnInit } from '@angular/core';
import { detalleventa } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleventa-edit',
  templateUrl: './detalleventa-edit.component.html',
  styleUrls: ['./detalleventa-edit.component.css']
})
export class DetalleventaEditComponent implements OnInit{

    valorInput: number | undefined;
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

    constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/detalleventa')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.idempresa!, this.user,'/detalleventa')
        .subscribe(
          res => {
            this.router.navigate(['/empresa']);
          },
          err => console.error(err)
        );
    }  
  }
