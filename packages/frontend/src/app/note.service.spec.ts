import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoteService, Note } from './note.service';

describe('NoteService', () => {
  let service: NoteService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        NoteService,
      ],
    });

    http = TestBed.get(HttpTestingController);
    service = TestBed.get(NoteService);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchNotes', () => {
    it('should get the notes for a game', () => {
      service.fetchNotes(1).subscribe();

      const { request } = http.expectOne('http://localhost:5000/games/1/notes');
      expect(request.method).toEqual('GET');
    });
  });

  describe('getNote', () => {
    it('should get a the note', () => {
      service.getNote(1, 1).subscribe();

      const { request } = http.expectOne('http://localhost:5000/games/1/notes/1');
      expect(request.method).toEqual('GET');
    });
  });

  describe('saveNote', () => {
    it('should insert a note', () => {
      const note: Note = {
        name: 'test note',
        body: 'test note body',
      };

      service.saveNote(1, note).subscribe();

      const { request } = http.expectOne('http://localhost:5000/games/1/notes');
      expect(request.method).toEqual('POST');
      expect(request.body).toBe(note);
    });

    it('should update a note if the given note has an ID', () => {
      const note: Note = {
        id: 123,
        name: 'test note',
      };

      service.saveNote(1, note).subscribe();

      const { request } = http.expectOne('http://localhost:5000/games/1/notes/123');
      expect(request.method).toEqual('PATCH');
      expect(request.body).toBe(note);
    });
  });
});
