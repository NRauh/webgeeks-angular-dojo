import { Component, OnInit } from '@angular/core';

export interface Game {
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
    { name: 'First Game', active: false },
    { name: 'Second Game', active: true },
  ];

  constructor() { }

  ngOnInit() {
  }

}
