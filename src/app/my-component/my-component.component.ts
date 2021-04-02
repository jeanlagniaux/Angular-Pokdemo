import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../poke-api.service';
import { PokeDetail, Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIService]
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  selectedPokeId!: Pokemon;
  searchPokemonName = '';
  pokes: Pokemon[] = [];
  pokeDetail!: PokeDetail;
  constructor(private pokeService: PokeAPIService) {
  }

  onClickGo() {
    console.log(this.selectedPokeId);
    if (this.selectedPokeId != null) {
      this.pokeService.getPokemonInfo(this.selectedPokeId.id).subscribe((data) =>{
        this.pokeDetail = data
      });
    }
  }
  
  ngOnInit(): void {
    this.pokeService.getPokemon().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon('' + index, e.name, e.url));
      });
    });
  }

}
