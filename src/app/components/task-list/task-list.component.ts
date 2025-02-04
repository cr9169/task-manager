import { Component } from '@angular/core';
import { ITask } from '../../models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  standalone: false,
})
export class TaskListComponent {
  tasks: ITask[] = [
    {
      id: 1,
      title: 'Complete Angular Course',
      completed: false,
      creationDate: new Date(),
    },
    {
      id: 2,
      title: 'Review Project Requirements',
      completed: true,
      creationDate: new Date(),
    },
    {
      id: 3,
      title: 'Submit Weekly Report',
      completed: false,
      creationDate: new Date(),
    },
    {
      id: 4,
      title: 'Submit Monthly Report',
      completed: false,
      creationDate: new Date(),
    },
  ];

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  changeTaskStatus(statusDetails: { completed: boolean; id: number }) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === statusDetails.id) {
        return { ...task, completed: statusDetails.completed };
      }
      return task;
    });
  }

  trackById(_index: number, task: ITask) {
    return task.id;
  }
}
