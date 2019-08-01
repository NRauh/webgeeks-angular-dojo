import { Component, OnInit } from '@angular/core';

export interface Game {
  id: number;
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  games: Game[] = [
    { id: 1, name: 'First Game', active: false },
    { id: 2, name: 'Second Game', active: true },
  ];

  constructor() { }

  ngOnInit() {
  }

}
