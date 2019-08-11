import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { GameFormComponent } from './game-form.component';
import { GameService, Game } from '../game.service';

describe('GameFormComponent', () => {
  let component: GameFormComponent;
  let fixture: ComponentFixture<GameFormComponent>;
  let gameService: GameService;
  let dialogRef: any;

  beforeEach(async(() => {
    dialogRef = {
      close: jest.fn(),
    };

    TestBed.configureTestingModule({
      declarations: [GameFormComponent],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatCheckboxModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRef },
        { provide: MAT_DIALOG_DATA, useValue: { game: {} } },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    gameService = TestBed.get(GameService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('saveGame', () => {
    let fakeGame: Game;

    beforeEach(() => {
      fakeGame = {
        name: 'Test Game',
        active: true,
      };

      gameService.saveGame = jest.fn().mockReturnValue(of({}));
      component.gameForm.setValue(fakeGame);
    });

    it('should save the value of the form then close the modal', () => {
      component.saveGame();

      expect(gameService.saveGame).toHaveBeenCalledWith(fakeGame);
      expect(dialogRef.close).toHaveBeenCalledWith(true);
    });

    it('should add the game ID if it was given in the data', () => {
      const data = TestBed.get(MAT_DIALOG_DATA);
      data.game.id = 42;

      component.saveGame();

      expect(gameService.saveGame).toHaveBeenCalledWith({
        ...fakeGame,
        id: 42,
      });
    });
  });

  describe('save button', () => {
    it('should be disabled until the form has changed', () => {
      const el = fixture.nativeElement;
      const saveButton = el.querySelector('button[type="submit"]');
      expect(saveButton.disabled).toEqual(true);

      component.gameForm.markAsDirty();
      fixture.detectChanges();
      expect(saveButton.disabled).toEqual(false);
    });
  });
});
