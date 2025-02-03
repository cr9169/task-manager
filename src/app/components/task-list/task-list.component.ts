import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  standalone: false,
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Complete Angular Course', completed: false },
    { id: 2, title: 'Review Project Requirements', completed: true },
    { id: 3, title: 'Submit Weekly Report', completed: false },
  ];
}
