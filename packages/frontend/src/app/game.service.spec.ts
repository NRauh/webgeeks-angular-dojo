import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GameService, Game } from './game.service';

describe('GameService', () => {
  let service: GameService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });

    http = TestBed.get(HttpTestingController);
    service = TestBed.get(GameService);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchGames', () => {
    it('should get a list of games', () => {
      service.fetchGames().subscribe();
      const { request } = http.expectOne('http://localhost:5000/games');
      expect(request.method).toEqual('GET');
    });
  });

  describe('saveGame', () => {
    it('should insert a game if it does not have an ID', () => {
      const game: Game = {
        name: 'test game',
        active: false,
      };
      service.saveGame(game).subscribe();

      const { request } = http.expectOne('http://localhost:5000/games');
      expect(request.method).toEqual('POST');
      expect(request.body).toBe(game);
    });

    it('should update a game if it has an ID', () => {
      const game: Game = {
        id: 321,
        name: 'test game',
      };
      service.saveGame(game).subscribe();

      const { request } = http.expectOne('http://localhost:5000/games/321');
      expect(request.method).toEqual('PATCH');
      expect(request.body).toBe(game);
    });
  });

  describe('removeGame', () => {
    it('should remove a game', () => {
      const game: Game = {
        id: 123,
      };
      service.removeGame(game).subscribe();

      const { request } = http.expectOne('http://localhost:5000/games/123');
      expect(request.method).toEqual('DELETE');
    });
  });
});
