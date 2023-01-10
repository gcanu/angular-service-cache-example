import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  constructor(private planetService: PlanetService) {}

  planetInfo$: Observable<any>;

  ngOnInit() {
    this.planetInfo$ = this.planetService.tatooine$;
  }

  getInfo() {
    this.planetService.updateTatooine();
  }
}
