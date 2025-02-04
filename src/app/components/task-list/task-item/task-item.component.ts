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
}
