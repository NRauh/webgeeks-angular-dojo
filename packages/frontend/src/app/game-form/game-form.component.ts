import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GameService, Game } from '../game.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  game: Game;
}

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent {
  gameForm = new FormGroup({
    name: new FormControl(this.data.game.name || ''),
    active: new FormControl(this.data.game.active || false),
  });

  constructor(
    public dialogRef: MatDialogRef<GameFormComponent>,
    public gameService: GameService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  saveGame() {
    const { id: gameId } = this.data.game;

    if (gameId) {
      this.gameService.saveGame({
        ...this.gameForm.value,
        id: gameId,
      });
    } else {
      this.gameService.addGame(this.gameForm.value);
    }

    this.dialogRef.close();
  }
}
