import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Router
import { HeroesRoutingModule } from './heroes-routing.module';
//Material
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
//Components
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagePipe } from './pipes/image.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListarComponent,
    HeroeTarjetaComponent,
    ImagePipe,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class HeroesModule {}
