import { Component,OnInit } from '@angular/core';
import { encabezadocompra } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-encabezadocompra-edit',
  templateUrl: './encabezadocompra-edit.component.html',
  styleUrls: ['./encabezadocompra-edit.component.css']
})
export class EncabezadocompraEditComponent implements OnInit{
  
  valorInput: number | undefined;
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

    constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/encabezadocompra')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.num_compra!, this.user,'/encabezadocompra')
        .subscribe(
          res => {
            this.router.navigate(['/empresa']);
          },
          err => console.error(err)
        );
    }  
  }

