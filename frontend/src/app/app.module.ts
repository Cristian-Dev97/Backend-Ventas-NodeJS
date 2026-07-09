import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    PagosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
