import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FindComponent } from './find/find.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokedexRoutingModule } from './pokedex-routing.module';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    FindComponent,
    PokemonComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
