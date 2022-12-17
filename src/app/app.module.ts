import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from './components/component/component.module';
import {HttpClientModule} from  '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material/material.module';

@NgModule({
    declarations: [
        AppComponent,NavigationComponent


    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ComponentModule,
        HttpClientModule,
        RouterModule,
        MaterialModule

    ]

})
export class AppModule { }
