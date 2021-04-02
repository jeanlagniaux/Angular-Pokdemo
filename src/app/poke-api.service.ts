import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeServiceRes } from './pokemon';
import { PokeDetail } from './pokemon';

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})

export class PokeAPIService {

  constructor(private http: HttpClient) {
    this.getPokemon();
  }
  getPokemon(): Observable<PokeServiceRes> {
    return this.http.get<PokeServiceRes>(url);
  }

  getPokemonInfo(id: String): Observable<PokeDetail> {
    return this.http.get<PokeDetail>(url + id + '/');
  }
}
