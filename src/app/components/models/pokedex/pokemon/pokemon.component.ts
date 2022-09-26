import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  id: number | undefined
  //id!: number  --es lo mismo que el de arriba

  constructor(private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(rest => {
      this.id = rest['id']
      console.log(this.id);
      
    })
  }

}
