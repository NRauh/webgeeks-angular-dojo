import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { GameService, Game } from '../game.service';
import { GameFormComponent } from '../game-form/game-form.component';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
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
