import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { EditGameComponent } from './edit-game/edit-game.component';


const routes: Routes = [
  {
    path: 'games',
    component: GameListComponent,
  },
  {
    path: 'games/:id/edit',
    component: EditGameComponent,
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
