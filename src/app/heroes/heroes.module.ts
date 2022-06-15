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


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListarComponent
  ],
  imports: [CommonModule, HeroesRoutingModule, FlexLayoutModule, MaterialModule],
})
export class HeroesModule {}
