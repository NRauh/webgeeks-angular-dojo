import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, takeWhile } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {
  editing: boolean;

  noteForm = new FormGroup({
    name: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe((routeData) => {
      this.editing = routeData.edit;
    });

    this.getAndSetNote();
  }

  saveNote() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const noteId = params.get('noteId');
        const gameId = params.get('gameId');
        const note = this.noteForm.value;

        return this.noteService.saveNote(gameId, {
          ...note,
          id: noteId,
        });
      }),
    ).subscribe(() => {
      this.snackBar.open('Saved Note');
    }, () => {
      this.snackBar.open('Failed to Save Note');
    });
  }

  getAndSetNote() {
    this.route.paramMap.pipe(
      takeWhile(this.isEditing),
      switchMap((params: ParamMap) => this.noteService.getNote(params.get('gameId'), params.get('noteId'))),
    ).subscribe(({ name, body }) => {
      this.noteForm.setValue({
        name,
        body,
      });
    });
  }

  private isEditing(params: ParamMap): boolean {
    return !!params.get('gameId') && !!params.get('noteId');
  }
}
