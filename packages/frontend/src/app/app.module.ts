import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameService } from './game.service';
import { GameFormComponent } from './game-form/game-form.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteFormComponent } from './note-form/note-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameFormComponent,
    NoteListComponent,
    NoteFormComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
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
