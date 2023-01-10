import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanetService } from './planet.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private planetService: PlanetService) {}

  planetInfo$: Observable<any>;

  ngOnInit() {
    this.planetInfo$ = this.planetService.tatooine$;
  }

  getInfo() {
    this.planetService.updateTatooine();
  }
}
