import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GameService } from '../game.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {
  gameForm = new FormGroup({
    name: new FormControl(''),
    active: new FormControl(false),
  });

  constructor(
    public dialogRef: MatDialogRef<GameFormComponent>,
    public gameService: GameService
  ) {
  }

  ngOnInit() {
  }

  saveGame() {
    this.gameService.addGame(this.gameForm.value);
    this.dialogRef.close();
  }
}
