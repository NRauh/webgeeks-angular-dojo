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
    const { id } = this.data.game;
    const gameToSave: Game = {
      ...this.gameForm.value,
      id,
    };

    this.gameService.saveGame(gameToSave).subscribe((game) => {
      console.log('saved game', game);
      this.dialogRef.close(true);
    });
  }
}
