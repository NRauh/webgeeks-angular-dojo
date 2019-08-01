import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent {
  gameForm = new FormGroup({
    name: new FormControl('test game'),
    active: new FormControl(false),
  });

  constructor() { }

  saveGame() {
    console.log('will save game');
    console.log(this.gameForm.value);
  }
}
