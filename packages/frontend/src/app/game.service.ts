import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Game {
  id?: number;
  name?: string;
  active?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(
    private http: HttpClient,
  ) {
  }

  fetchGames(): Observable<Game[]> {
    return this.http.get<Game[]>('http://localhost:5000/games').pipe(
      tap(() => console.log('sending a request')),
    );
  }

  saveGame(game: Game): Observable<Game> {
    if (game.id) {
      return this.updateGame(game);
    } else {
      return this.insertGame(game);
    }
  }

  // TODO: let the user click a button to remove a game
  // BONUS TODO: update the list of games after removal of a game
  removeGame(game: Game): Observable<void> {
    const url = `http://localhost:5000/games/${game.id}`;
    return this.http.delete<void>(url);
  }

  private insertGame(game: Game): Observable<Game> {
    return this.http.post<Game>('http://localhost:5000/games', game);
  }

  private updateGame(game: Game) {
    const url = `http://localhost:5000/games/${game.id}`;
    return this.http.patch<Game>(url, game);
  }
}
