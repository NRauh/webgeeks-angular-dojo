import { Injectable } from '@angular/core';

export interface Game {
  id?: number;
  name?: string;
  active?: boolean;
}

interface GameList {
  [key: string]: Game;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games: GameList = {
    1: { id: 1, name: 'First Game', active: false },
    2: { id: 2, name: 'Second Game', active: true },
  };

  constructor() { }

  get gamesArray() {
    return Object.values(this.games);
  }

  addGame(game: Game) {
    const id = Object.keys(this.games).length + 1;
    this.games[id] = {
      ...game,
      id,
    };
  }

  saveGame(game: Game) {
    this.games[game.id] = game;
  }
}
