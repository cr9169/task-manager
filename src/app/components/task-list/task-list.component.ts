import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
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
      isHighlighted: false,
    },
    {
      id: 2,
      title: 'Review Project Requirements',
      completed: true,
      creationDate: new Date(),
      isHighlighted: false,
    },
    {
      id: 3,
      title: 'Submit Weekly Report',
      completed: false,
      creationDate: new Date(),
      isHighlighted: false,
    },
    {
      id: 4,
      title: 'Submit Monthly Report',
      completed: false,
      creationDate: new Date(),
      isHighlighted: false,
    },
  ];

  @ViewChildren('titleInput, statusInput')
  inputs!: QueryList<ElementRef>;

  convertStringToBool(string: string) {
    if (string === 'true') {
      return true;
    } else if (string === 'false') {
      return false;
    } else {
      throw new Error('String is not a boolean!');
    }
  }

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

  createTask(title: string, status: boolean) {
    const newTask = {
      id: this.tasks[this.tasks.length - 1].id + 1,
      title: title,
      completed: status,
      creationDate: new Date(),
      isHighlighted: false,
    };
    this.tasks = [...this.tasks, newTask];
  }

  highlightTasks() {
    this.tasks.forEach((task) => {
      task.isHighlighted = !task.isHighlighted;
    });
  }
}
