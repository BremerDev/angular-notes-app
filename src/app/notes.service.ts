import { Injectable } from '@angular/core';
import { fakeNotes, fakeSharedNotes } from './fake-data';
import { Note } from './types';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  getNotes(): Note[] {
    return fakeNotes;
  }

  getSharedNotes(): Note[] {
    return fakeSharedNotes;
  }
}
