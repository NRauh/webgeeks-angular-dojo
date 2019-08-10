import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  editing: boolean;
  noteForm = new FormGroup({
    name: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((routeData) => {
      this.editing = routeData.edit;
    });
  }

  saveNote() {
    console.log('i will save this note', this.noteForm.value);
  }
}
