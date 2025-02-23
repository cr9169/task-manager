import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: string): string {
    return value.endsWith('!') ? value.toUpperCase() : value;
  }
}
