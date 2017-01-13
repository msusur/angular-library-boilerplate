import { PipeTransform } from '@angular/core';
import { RoundDownPipe } from './round-down.pipe';

describe('Pipe: RoundDown', (): void => {
  it('should round a decimal number down to the nearest integer', (): void => {
    const pipe: PipeTransform = new RoundDownPipe(),
      result: number = pipe.transform(2.68);
    expect(result).toBe(2);
  });
});
