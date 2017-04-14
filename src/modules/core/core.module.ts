import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ROUTING } from './core.routing';

@NgModule({
  imports: [
      CommonModule,
      ClarityModule,
      ROUTING
  ],
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  exports: [HomeComponent, AboutComponent]
})
export class CoreModule {}
