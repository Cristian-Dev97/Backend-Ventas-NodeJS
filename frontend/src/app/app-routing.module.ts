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
import { AreastrabajoEditComponent } from './components/areastrabajo-edit/areastrabajo-edit.component';
import { SucursalesEditComponent } from './components/sucursales-edit/sucursales-edit.component';
import { ProveedorEditComponent } from './components/proveedor-edit/proveedor-edit.component';
import { EmpleadosEditComponent } from './components/empleados-edit/empleados-edit.component';
import { TipousuarioEditComponent } from './components/tipousuario-edit/tipousuario-edit.component';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';
import { ClientesEditComponent } from './components/clientes-edit/clientes-edit.component';
import { TipoproductoEditComponent } from './components/tipoproducto-edit/tipoproducto-edit.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';
import { FormapagoEditComponent } from './components/formapago-edit/formapago-edit.component';
import { EncabezadocompraEditComponent } from './components/encabezadocompra-edit/encabezadocompra-edit.component';
import { DetallecompraEditComponent } from './components/detallecompra-edit/detallecompra-edit.component';
import { EncabezadoventaEditComponent } from './components/encabezadoventa-edit/encabezadoventa-edit.component';
import { DetalleventaEditComponent } from './components/detalleventa-edit/detalleventa-edit.component';
import { CxcobrarEditComponent } from './components/cxcobrar-edit/cxcobrar-edit.component';
import { CxpagarEditComponent } from './components/cxpagar-edit/cxpagar-edit.component';
import { PagosEditComponent } from './components/pagos-edit/pagos-edit.component';

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
    path: 'areastrabajo/edit/:id',
    component : AreastrabajoEditComponent
  },

  {
    path: 'sucursales/edit/:id',
    component : SucursalesEditComponent
  },

  {
    path: 'proveedor/edit/:id',
    component : ProveedorEditComponent
  },

  {
    path: 'empleados/edit/:id',
    component : EmpleadosEditComponent
  },

  {
    path: 'tipousuario/edit/:id',
    component : TipousuarioEditComponent
  },

  {
    path: 'usuario/edit/:id',
    component : UsuarioEditComponent
  },

  {
    path: 'clientes/edit/:id',
    component : ClientesEditComponent
  },

  {
    path: 'tipoproducto/edit/:id',
    component : TipoproductoEditComponent 
  },

  {
    path: 'producto/edit/:id',
    component : ProductoEditComponent
  },

  {
    path: 'formapago/edit/:id',
    component : FormapagoEditComponent
  },

  {
    path: 'encabezadocompra/edit/:id',
    component : EncabezadocompraEditComponent
  },

  {
    path: 'detallecompra/edit/:id',
    component : DetallecompraEditComponent
  },

  {
    path: 'encabezadoventa/edit/:id',
    component : EncabezadoventaEditComponent
  },

  {
    path: 'detalleventa/edit/:id',
    component : DetalleventaEditComponent
  },

  {
    path: 'cxcobrar/edit/:id',
    component : CxcobrarEditComponent
  },

  {
    path: 'cxpagar/edit/:id',
    component : CxpagarEditComponent
  },

  {
    path: 'pagos/edit/:id',
    component : PagosEditComponent
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
