import { Component,OnInit  } from '@angular/core';
import { detallecompra } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallecompra-edit',
  templateUrl: './detallecompra-edit.component.html',
  styleUrls: ['./detallecompra-edit.component.css']
})
export class DetallecompraEditComponent implements OnInit{
  
  valorInput: number | undefined;
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

    constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
    
     ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/detallecompra')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.iddetcomp!, this.user,'/detallecompra')
        .subscribe(
          res => {
            this.router.navigate(['/detallecompra']);
          },
          err => console.error(err)
        );
    }  
  }
