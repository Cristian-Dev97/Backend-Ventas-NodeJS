import { Component,OnInit  } from '@angular/core';
import { encabezadoventa } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-encabezadoventa-edit',
  templateUrl: './encabezadoventa-edit.component.html',
  styleUrls: ['./encabezadoventa-edit.component.css']
})
export class EncabezadoventaEditComponent {
  
  valorInput: number | undefined;
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

  constructor(private Data: DataService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/encabezadoventa')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.num_venta!, this.user,'/encabezadoventa')
        .subscribe(
          res => {
            this.router.navigate(['/encabezadoventa']);
          },
          err => console.error(err)
        );
    }  
  }
