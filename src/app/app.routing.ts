/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent, AboutPageComponent } from './core/pages';
import { NavItemType } from './core/shared';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full', data: { navItem: { type: NavItemType.BRAND, label: 'Clearly Angular'}}},
    {path: 'home', component: HomePageComponent, data: { navItem: { type: NavItemType.NAV, label: 'Home'}}},
    {path: 'about', component: AboutPageComponent, data: { navItem: { type: NavItemType.NAV, label: 'About'}}}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
