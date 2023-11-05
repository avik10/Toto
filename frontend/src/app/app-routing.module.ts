import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_CONSTANTS } from './core/constants/common-constants';
const routes: Routes = [
  { path: '', redirectTo: ROUTER_CONSTANTS.homeRoute, pathMatch: 'full' },
  {
    path: ROUTER_CONSTANTS.homeRoute,
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
