import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { FindComponent } from './find/find.component';
import { ListComponent } from './list/list.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { AppComponent } from 'src/app/app.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'agregar',
        component: AddComponent
      },
      {
        path: 'lista',
        component: ListComponent
      },
      {
        path: 'buscar',
        component: FindComponent
      },
      {
        path: 'pokemon',
        component: PokemonComponent
      },
      {
        path: 'pokemon/id',
        component: PokemonComponent,
        pathMatch: 'full'
      },
      {
        path: 'pokedex',
        component: PokedexComponent
      },
      {
        path: '**',
        component: AppComponent
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokedexRoutingModule { }
