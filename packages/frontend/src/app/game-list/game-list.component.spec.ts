import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { GameListComponent } from './game-list.component';
import { Game, GameService } from '../game.service';
import { GameFormComponent } from '../game-form/game-form.component';

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;
  let gameService: GameService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameListComponent],
      imports: [
        MatCardModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const gamesStub = of<Game[]>([
      { id: 1, name: 'first game', active: true },
      { id: 2, name: 'second game', active: false },
    ]);
    gameService = TestBed.get(GameService);
    gameService.fetchGames = jest.fn().mockReturnValue(gamesStub);

    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have fetch a list of games', () => {
    expect(document.querySelectorAll('mat-card').length).toEqual(2);
  });

  describe('openGameForm', () => {
    let dialog: MatDialog;
    let formDialog: any;

    beforeEach(() => {
      dialog = TestBed.get(MatDialog);
      formDialog = {
        afterClosed: jest.fn().mockReturnValue(of<boolean>(true)),
      };
      dialog.open = jest.fn().mockReturnValue(formDialog);
    });

    it('is opened with no game via new game button', () => {
      const newButton = fixture.nativeElement.querySelector('h1 button');
      newButton.click();

      expect(dialog.open).toHaveBeenCalledWith(
        GameFormComponent,
        (expect as any).objectContaining({ data: { game: {} } }),
      );
    });

    it('is opened with the game clicked via edit game button', () => {
      const editButton = fixture.nativeElement.querySelector('mat-card-actions button');
      editButton.click();

      expect(dialog.open).toHaveBeenCalledWith(
        GameFormComponent,
        (expect as any).objectContaining({
          data: {
            game: { id: 1, name: 'first game', active: true },
          },
        }),
      );
    });

    it('fetches games after the dialog closes', () => {
      component.openGameForm();

      expect(formDialog.afterClosed).toHaveBeenCalled();
      expect(gameService.fetchGames).toHaveBeenCalledTimes(2);
    });

    it('does not fetch games if the dialog closes without needing to update', () => {
      formDialog.afterClosed.mockReturnValue(of<boolean>(false));
      component.openGameForm();
      expect(formDialog.afterClosed).toHaveBeenCalled();
      expect(gameService.fetchGames).toHaveBeenCalledTimes(1);
    });
  });
});
