import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { shareReplay, switchMap, tap } from 'rxjs/operators';

export interface Todo {
  titre: string;
  description: string;
  fait: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todo$: Subject<void> = new Subject<void>();
  todos$: Observable<Todo[]> = this._todo$.pipe(
    switchMap(() => this.http.get<any>('https://xkcd.com/info.0.json')),
    tap(data => console.log(data)),
    shareReplay(1),
  );

  constructor(private http: HttpClient) {
  }

  public updateTodos() {
    this._todo$.next();
  }
}