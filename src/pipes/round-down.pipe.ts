import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundDown'
})
export class RoundDownPipe implements PipeTransform {
  public transform (input: number): number {
    return Math.floor(input);
  }
}
