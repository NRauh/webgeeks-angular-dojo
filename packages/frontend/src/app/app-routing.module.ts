import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  {
    path: 'games',
    component: GameListComponent,
  },
  {
    path: 'games/:id',
    children: [
      {
        path: 'notes',
        component: NoteListComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
