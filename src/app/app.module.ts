import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from 'clarity-angular';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ClarityModule.forRoot(),
        CoreModule.forRoot(),
        AuthModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
