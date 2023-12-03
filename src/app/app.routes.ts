import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { NoteDetailPageComponent } from './note-detail-page/note-detail-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const routes: Routes = [
    { path: '', redirectTo: './notes', pathMatch: 'full' },
    { path: 'notes', component: NotesPageComponent },
    { path: 'notes/:noteId', component: NoteDetailPageComponent },
    { path: '**', component: NotFoundPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }