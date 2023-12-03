import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router';
import { NotesService } from '../notes.service';
import { Note } from '../types';

@Component({
  selector: 'app-notes-page',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './notes-page.component.html',
  styleUrl: './notes-page.component.css'
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

  getWordCount(str: string): number {
    return str.split(' ').length;
  }

  noteSelected(noteId: string) {
    this.router.navigateByUrl(`/notes/${noteId}`);
  }

}
