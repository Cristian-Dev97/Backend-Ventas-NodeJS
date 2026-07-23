import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

import { DataService } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { EmpresaEditComponent } from './components/empresa-edit/empresa-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { FilterempresaPipe } from './pipe/filterempresa.pipe';
import { FormapagoEditComponent } from './components/formapago-edit/formapago-edit.component';
import { EncabezadocompraEditComponent } from './components/encabezadocompra-edit/encabezadocompra-edit.component';
import { DetallecompraEditComponent } from './components/detallecompra-edit/detallecompra-edit.component';
import { EncabezadoventaEditComponent } from './components/encabezadoventa-edit/encabezadoventa-edit.component';
import { DetalleventaEditComponent } from './components/detalleventa-edit/detalleventa-edit.component';
import { CxcobrarEditComponent } from './components/cxcobrar-edit/cxcobrar-edit.component';
import { CxpagarEditComponent } from './components/cxpagar-edit/cxpagar-edit.component';
import { PagosEditComponent } from './components/pagos-edit/pagos-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    SucursalesComponent,
    ProveedorComponent,
    AreastrabajoComponent,
    EmpleadosComponent,
    TipousuarioComponent,
    UsuarioComponent,
    ClientesComponent,
    TipoproductoComponent,
    ProductoComponent,
    FormapagoComponent,
    EncabezadocompraComponent,
    DetallecompraComponent,
    EncabezadoventaComponent,
    DetalleventaComponent,
    CxcobrarComponent,
    CxpagarComponent,
    PagosComponent,
    EmpresaEditComponent,
    NavegacionComponent,
    AreastrabajoEditComponent,
    SucursalesEditComponent,
    ProveedorEditComponent,
    EmpleadosEditComponent,
    TipousuarioEditComponent,
    UsuarioEditComponent,
    ClientesEditComponent,
    TipoproductoEditComponent,
    ProductoEditComponent,
    FilterempresaPipe,
    FormapagoEditComponent,
    EncabezadocompraEditComponent,
    DetallecompraEditComponent,
    EncabezadoventaEditComponent,
    DetalleventaEditComponent,
    CxcobrarEditComponent,
    CxpagarEditComponent,
    PagosEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule   
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
