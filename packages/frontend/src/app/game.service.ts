import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface Game {
  id?: number;
  name?: string;
  active?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {
  }

  fetchGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.apiPrefix}/games`);
  }

  saveGame(game: Game): Observable<Game> {
    if (game.id) {
      return this.updateGame(game);
    }
    return this.insertGame(game);
  }

  // TODO: let the user click a button to remove a game
  // BONUS TODO: update the list of games after removal of a game
  removeGame(game: Game): Observable<void> {
    const url = `${environment.apiPrefix}/games/${game.id}`;
    return this.http.delete<void>(url);
  }

  private insertGame(game: Game): Observable<Game> {
    return this.http.post<Game>(`${environment.apiPrefix}/games`, game);
  }

  private updateGame(game: Game) {
    const url = `${environment.apiPrefix}/games/${game.id}`;
    return this.http.patch<Game>(url, game);
  }
}
