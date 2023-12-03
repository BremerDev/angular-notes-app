import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router';
import { NotesService } from '../notes.service';
import { Note } from '../types';
import { NotesListComponent } from "../notes-list/notes-list.component";

@Component({
    selector: 'app-notes-page',
    standalone: true,
    templateUrl: './notes-page.component.html',
    styleUrl: './notes-page.component.css',
    imports: [CommonModule, NotesListComponent]
})
export class NotesPageComponent implements OnInit{
  notes: Note[] = [];
  sharedNotes: Note[] = [];

  constructor(
  private notesService: NotesService,
  private router: Router,
  ) { }

  ngOnInit(): void {
  this.notes = this.notesService.getNotes();
  this.sharedNotes = this.notesService.getSharedNotes();
  }

  noteSelected(noteId: string) {
    this.router.navigateByUrl(`/notes/${noteId}`);
  }

}
