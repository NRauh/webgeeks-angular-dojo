import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GameService } from './game.service';
import { MatDialogModule } from '@angular/material/dialog';
import { GameFormComponent } from './game-form/game-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    EditGameComponent,
    GameFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  providers: [
    GameService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    GameFormComponent,
  ],
})
export class AppModule { }
