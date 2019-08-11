import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NoteListComponent } from './note-list.component';
import { NoteService, Note } from '../note.service';

describe('NoteListComponent', () => {
  let component: NoteListComponent;
  let fixture: ComponentFixture<NoteListComponent>;
  let noteService: NoteService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteListComponent],
      imports: [
        MatCardModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    noteService = TestBed.get(NoteService);
    const fakeNotes: Note[] = [
      { id: 1, name: 'note one', body: 'note body' },
      { id: 2, name: 'note two', body: 'note body' },
    ];
    noteService.fetchNotes = jest.fn().mockReturnValue(of(fakeNotes));

    fixture = TestBed.createComponent(NoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the notes for a game', () => {
    const route = TestBed.get(ActivatedRoute);
    route.paramMap.next({ gameId: '42' });

    const noteCards = fixture.nativeElement.querySelectorAll('mat-card');
    expect(noteService.fetchNotes).toHaveBeenCalledWith('42');
    expect(noteCards.length).toEqual(2);
  });
});
