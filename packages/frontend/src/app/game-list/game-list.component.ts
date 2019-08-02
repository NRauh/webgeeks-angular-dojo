import { Component, OnInit } from '@angular/core';
import { GameService, Game } from '../game.service';
import { MatDialog } from '@angular/material/dialog';
import { GameFormComponent } from '../game-form/game-form.component';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  constructor(
    public gameService: GameService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
  }

  openGameForm(game: Game = {}) {
    this.dialog.open(GameFormComponent, {
      width: '50vw',
      data: {
        game,
      },
    });
  }
}
