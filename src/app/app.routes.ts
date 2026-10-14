/*
* File: app.routes.ts
* Author: Csorba Péter
* Copyright: 2026, Csorba Péter
* Group: Szoft II-N
* Date: 2026-10-14
* Github: https://github.com/gunkhu
* Licenc: MIT
*/
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RombuszComponent } from './rombusz/rombusz.component';
export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'rombusz', component: RombuszComponent},
];
