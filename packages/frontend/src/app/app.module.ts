import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GameService } from './game.service';
import { GameFormComponent } from './game-form/game-form.component';
import { NoteListComponent } from './note-list/note-list.component';
import { UIModule } from './ui/ui.module';
import { NoteFormComponent } from './note-form/note-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameFormComponent,
    NoteListComponent,
    NoteFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    HttpClientModule,
    MatSnackBarModule,
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
