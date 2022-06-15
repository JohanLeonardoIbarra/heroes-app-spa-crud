import { NgModule } from '@angular/core';
//Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  exports: [MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule],
})
export class MaterialModule {}
