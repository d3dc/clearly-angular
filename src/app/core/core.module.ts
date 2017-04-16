import { NavService } from './shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';

import { HomePageComponent, AboutPageComponent } from './pages';

@NgModule({
  imports: [
      CommonModule,
      ClarityModule
  ],
  declarations: [
    HomePageComponent,
    AboutPageComponent
  ],
  exports: [HomePageComponent, AboutPageComponent],
  providers: [NavService]
})
export class CoreModule {}
