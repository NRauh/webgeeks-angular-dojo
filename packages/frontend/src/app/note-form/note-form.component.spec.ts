import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoteFormComponent } from './note-form.component';
import { NoteService, Note } from '../note.service';

describe('NoteFormComponent', () => {
  let component: NoteFormComponent;
  let fixture: ComponentFixture<NoteFormComponent>;
  let noteService: NoteService;
  let route: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteFormComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    noteService = TestBed.get(NoteService);
    noteService.getNote = jest.fn().mockReturnValue(of({}));
    noteService.saveNote = jest.fn().mockReturnValue(of({}));

    route = TestBed.get(ActivatedRoute);

    fixture = TestBed.createComponent(NoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header for new notes', () => {
    const title: HTMLHeadingElement = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toEqual('New Note');
  });

  it('should have a header editing a note', () => {
    route.data.next({ edit: true });
    fixture.detectChanges();
    const title: HTMLHeadingElement = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toEqual('Editing Note');
  });

  describe('saveNote', () => {
    it('should get the ids and save the form and show a notification', () => {
      route.paramMap.next({ gameId: '42', noteId: '1' });
      component.noteForm.setValue({
        name: 'some note',
        body: 'some body',
      });

      component.saveNote();

      expect(noteService.saveNote).toHaveBeenCalledWith('42', {
        id: '1',
        name: 'some note',
        body: 'some body',
      });
    });
  });

  describe('getAndSetNote', () => {
    it('should get the note from the route params', () => {
      const fakeNote: Note = {
        id: 1,
        name: 'fake note',
        body: 'a fake body',
      };

      route.paramMap.next({ gameId: '42', noteId: '1' });
      (noteService.getNote as jest.Mock).mockReturnValue(of(fakeNote));

      component.getAndSetNote();

      expect(noteService.getNote).toHaveBeenCalledWith('42', '1');
      expect(component.noteForm.value).toEqual({
        name: fakeNote.name,
        body: fakeNote.body,
      });
    });

    it('should not set the note if it is not editing', () => {
      component.getAndSetNote();
      expect(noteService.getNote).not.toHaveBeenCalled();
    });
  });
});
