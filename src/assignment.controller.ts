import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  // Fibonacci Sequence Endpoint (Assignment 1)
  @Get('fibonacci/:n')
  getFibonacciSequence(@Param('n') n: number): { sequence: number[] } {
    const sequence = this.calculateFibonacci(n);
    return { sequence };
  }

  // Function to calculate the Fibonacci sequence up to 'n' terms
  calculateFibonacci(n: number): number[] {
    if (n <= 0) return [];  // If n is 0 or negative, return an empty array
    let sequence = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
      sequence.push(a);
      [a, b] = [b, a + b];
    }

    return sequence;
  }

  // Prime Number Checker Endpoint (Assignment 2)
  @Get('prime/:number')
  checkPrime(@Param('number') number: number): { isPrime: boolean } {
    const isPrime = this.isPrime(number);
    return { isPrime };
  }

  // Function to check if a number is prime
  private isPrime(n: number): boolean {
    if (n <= 1) return false;  // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;  // If divisible by any number other than 1 and itself, it's not prime
    }
    return true;  // If not divisible by any number, it is prime
  }

  // Factorial Calculator Endpoint (Assignment 3)
  @Get('factorial/:number')
  calculateFactorial(@Param('number') number: number): { factorial: number } {
    const factorial = this.factorial(number);  // Calculate the factorial
    return { factorial };
  }

  // Function to calculate the factorial of a number
  private factorial(n: number): number {
    if (n < 0) return -1;  // Factorial is not defined for negative numbers
    if (n === 0) return 1;  // 0! = 1
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
