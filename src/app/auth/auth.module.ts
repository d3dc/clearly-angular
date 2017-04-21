import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStoreModule } from './auth-store.module';

@NgModule({
  imports: [
    CommonModule,
    AuthStoreModule
  ],
  declarations: []
})
export class AuthModule { }
