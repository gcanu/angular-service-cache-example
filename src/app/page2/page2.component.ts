import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  constructor(private planetService: PlanetService) {}

  planetInfo$: Observable<any>;

  ngOnInit() {
    this.planetInfo$ = this.planetService.tatooine$;
  }

  getInfo() {
    this.planetService.updateTatooine();
  }
}
