import { Component, OnInit } from '@angular/core';
import { GameService, Game } from '../game.service';
import { MatDialog } from '@angular/material/dialog';
import { GameFormComponent } from '../game-form/game-form.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  games: Game[];
  games$: Observable<Game[]>;

  constructor(
    public gameService: GameService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.games$ = this.gameService.fetchGames();
  }

  openGameForm(game: Game = {}) {
    const formDialog = this.dialog.open(GameFormComponent, {
      width: '50vw',
      data: {
        game,
      },
    });

    formDialog.afterClosed().subscribe((needToUpdate) => {
      if (needToUpdate) {
        this.games$ = this.gameService.fetchGames();
      }
    });
  }
}
