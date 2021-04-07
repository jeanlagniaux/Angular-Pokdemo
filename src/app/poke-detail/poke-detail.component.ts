import { Component, Injectable, Input, OnInit } from '@angular/core';
import { PokShareInfoService } from '../pok-share-info.service';
import { PokeDetail } from '../pokemon';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css'],
  providers: []
})
export class PokeDetailComponent implements OnInit {

  @Input('detail')
  detail!: PokeDetail;


  constructor(private PokeShareInfoService: PokShareInfoService) {
    this.PokeShareInfoService.getObservable().subscribe(e => console.log('e' + e));
  }

  ngOnInit(): void {
  }

}
