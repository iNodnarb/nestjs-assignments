import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {

  @Get('fibonacci/:n') // When we go to /assignments/fibonacci/some-number, this runs
  getFibonacciSequence(@Param('n') n: number): { sequence: number[] } {
    const sequence = this.calculateFibonacci(n); // Generate the Fibonacci sequence
    return { sequence }; // Return the sequence in a JSON format
  }

  calculateFibonacci(n: number): number[] {
    let sequence = [];
    let a = 0, b = 1; // The first two Fibonacci numbers

    // Loop to calculate the Fibonacci sequence up to 'n' terms
    for (let i = 0; i < n; i++) {
      sequence.push(a); // Add the current number to the sequence
      [a, b] = [b, a + b]; // Calculate the next Fibonacci number
    }

    return sequence;
  }
}
