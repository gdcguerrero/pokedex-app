import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent
    //pathMatch : 'full'
  },
  {
    path: 'authLazy',
    loadChildren: () => import ('./components/models/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./components/models/pokedex/pokedex-routing.module').then(m => m.PokedexRoutingModule),
    //canLoad: [AuthGuard],
    //canActivate:[AuthGuard]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo : '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
