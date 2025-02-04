import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../../models/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
  standalone: false,
})
export class TaskItemComponent {
  @Input()
  task!: ITask;

  @Output()
  deleteTask = new EventEmitter<number>();

  @Output()
  taskStatusChange = new EventEmitter<{ completed: boolean; id: number }>();

  onDeleteTask() {
    this.deleteTask.emit(this.task.id);
  }

  onChangeTaskStatus() {
    this.taskStatusChange.emit({
      completed: !this.task.completed,
      id: this.task.id,
    });
  }
}
