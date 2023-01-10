import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { shareReplay, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  private _tatooine$: Subject<void> = new Subject<void>();
  tatooine$: Observable<any> = this._tatooine$.pipe(
    switchMap(() => this.http.get<any>('https://swapi.dev/api/planets/1')),
    tap((data) => console.log(data)),
    shareReplay(1)
  );

  constructor(private http: HttpClient) {}

  public updateTatooine() {
    this._tatooine$.next();
  }
}
