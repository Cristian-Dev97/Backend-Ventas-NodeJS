import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { AreastrabajoComponent } from './components/areastrabajo/areastrabajo.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { TipousuarioComponent } from './components/tipousuario/tipousuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { TipoproductoComponent } from './components/tipoproducto/tipoproducto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FormapagoComponent } from './components/formapago/formapago.component';
import { EncabezadocompraComponent } from './components/encabezadocompra/encabezadocompra.component';
import { DetallecompraComponent } from './components/detallecompra/detallecompra.component';
import { EncabezadoventaComponent } from './components/encabezadoventa/encabezadoventa.component';
import { DetalleventaComponent } from './components/detalleventa/detalleventa.component';
import { CxcobrarComponent } from './components/cxcobrar/cxcobrar.component';
import { CxpagarComponent } from './components/cxpagar/cxpagar.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { EmpresaEditComponent } from './components/empresa-edit/empresa-edit.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';

const routes: Routes = [

  {
    path: 'empresa',
    component :EmpresaComponent
  },

  {
    path: 'sucursales',
    component :SucursalesComponent
  },

  {
    path: 'proveedor',
    component :ProveedorComponent
  },

  {
    path: 'areastrabajo',
    component :AreastrabajoComponent
  },

  {
    path: 'empleados',
    component :EmpleadosComponent
  },

  {
    path: 'tipousuario',
    component :TipousuarioComponent
  },

  {
    path: 'usuario',
    component :UsuarioComponent
  },

  {
    path: 'clientes',
    component :ClientesComponent
  },

  {
    path: 'tipoproducto',
    component :TipoproductoComponent
  },

  {
    path: 'producto',
    component :ProductoComponent
  },

  {
    path: 'formapago',
    component :FormapagoComponent
  },

  {
    path: 'encabezadocompra',
    component :EncabezadocompraComponent
  },

  {
    path: 'detallecompra',
    component :DetallecompraComponent
  },

  {
    path: 'encabezadoventa',
    component :EncabezadoventaComponent
  },

  {
    path: 'detalleventa',
    component :DetalleventaComponent
  },

  {
    path: 'cxcobrar',
    component :CxcobrarComponent
  },

  {
    path: 'cxpagar',
    component :CxpagarComponent
  },

  {
    path: 'pagos',
    component :PagosComponent
  },

  {
    path: 'empresa/edit/:id',
    component : EmpresaEditComponent
  },

    {
    path: 'navegacion',
    component : NavegacionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
