import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlatosComponent } from './components/platos/platos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeliveryService } from "./servicios/delivery.service";
import { DetallePlatoComponent } from './components/detalle-plato/detalle-plato.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ItemPlatoComponent } from './components/item-plato/item-plato.component';
import { HttpClientModule } from "@angular/common/http";
import { PlatoListaComponent } from './components/plato-lista/plato-lista.component'; 
import { PlatoAdminComponent } from './components/plato-admin/plato-admin.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PlatosComponent,
    DetallePlatoComponent,
    BuscadorComponent,
    ItemPlatoComponent,
    PlatoListaComponent,
    PlatoAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
