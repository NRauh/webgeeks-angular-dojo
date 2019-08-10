import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Note {
  id?: number;
  name: string;
  body?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http: HttpClient) {
  }

  fetchNotes(gameId: number | string): Observable<Note[]> {
    const url = `http://localhost:5000/games/${gameId}/notes`;
    return this.http.get<Note[]>(url);
  }

  getNote(gameId: number | string, noteId: number | string): Observable<Note> {
    const url = `http://localhost:5000/games/${gameId}/notes/${noteId}`;
    return this.http.get<Note>(url);
  }
}
