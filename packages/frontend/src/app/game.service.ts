import { Injectable } from '@angular/core';

export interface Game {
  id?: number;
  name?: string;
  active?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games: Game[] = [
    { id: 1, name: 'First Game', active: false },
    { id: 2, name: 'Second Game', active: true },
  ];

  constructor() { }

  addGame(game: Game) {
    this.games.push({
      ...game,
      id: this.games.length + 1,
    });
  }
}
