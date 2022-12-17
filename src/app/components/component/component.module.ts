import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { MaterialModule } from '../../material/material.module';
import { ListComponent } from '../task/list/list.component';
import { ChartsModule } from 'ng2-charts';
import { NavigationComponent } from '../../navigation/navigation.component';
import { RouterModule } from '@angular/router';





//importar AddComponent, ?

@NgModule({
  declarations: [HomeComponent,ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ChartsModule,
    RouterModule




  ],
  exports: [
    HomeComponent,


  ],
})
export class ComponentModule { }
