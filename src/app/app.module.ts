import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { NofoundComponent } from './nofound/nofound.component';
import { ListaComponent } from './lista/lista.component';
import { FooterComponent } from './footer/footer.component';

const RouterConfig: Routes = [

  {"path": "", "component":ListaComponent},
  {"path": "lista", "component":ListaComponent},
  {"path": "song/:cancion", "component":ReproductorComponent},
  {"path": "**", "component":NofoundComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReproductorComponent,
    NofoundComponent,
    ListaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
