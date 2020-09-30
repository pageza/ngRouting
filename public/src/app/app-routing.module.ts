import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphaComponent} from "./alpha/alpha.component";
import {BetaComponent} from "./beta/beta.component";
import {GammaComponent} from "./gamma/gamma.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'alpha', component: AlphaComponent},
  {path: 'beta', component: BetaComponent},
  {path: 'gamma/:id', component: GammaComponent},
  {path: '', pathMatch: 'full', redirectTo: '/alpha'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
