import { Component,OnInit  } from '@angular/core';
import { areastrabajo } from '../../Interface/user';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-areastrabajo-edit',
  templateUrl: './areastrabajo-edit.component.html',
  styleUrls: ['./areastrabajo-edit.component.css']
})
export class AreastrabajoEditComponent implements OnInit {

  valorInput: number | undefined;
    TUser: any = [];
    user: areastrabajo = {
    idarea: null,
    idempresa: null,
    idsuc: null,
    area: null,
    fecha_creacion: null,
    estado: 'Activo'
    }

    constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

     ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/areastrabajo')
        .subscribe(
          res => {
            this.user = res;
                                },
          err => console.log(err)
        );
    }
    }
    updateUser() {
      this.Data.update(this.user.idarea!, this.user,'/areastrabajo')
        .subscribe(
          res => {
            this.router.navigate(['/areastrabajo']);
          },
          err => console.error(err)
        );
    }  
  }

