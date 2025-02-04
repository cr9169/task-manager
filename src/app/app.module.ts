import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-list/task-item/task-item.component';
import { FallbackComponent } from './components/fallback/fallback.component';
import { HighlightPipe } from './pipes/highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    FallbackComponent,
  ],
  imports: [BrowserModule, HighlightPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
