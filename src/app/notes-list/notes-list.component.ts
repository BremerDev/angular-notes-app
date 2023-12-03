import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Note } from '../types';


@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent implements OnInit {
  @Input() notes!: Note[];

  @Output() selectNote = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getWordCount(str: string): number {
    return str.split(' ').length;
  }
}
