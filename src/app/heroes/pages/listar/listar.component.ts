import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [],
})
export class ListarComponent implements OnInit {
  constructor(private heroesService: HeroesService) {}
  heroes: Heroe[] = [];

  ngOnInit(): void {
    this.heroesService
      .getHeroes()
      .subscribe((resp: Heroe[]) => (this.heroes = resp));
  }
}
