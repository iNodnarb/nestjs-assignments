import { Module } from '@nestjs/common';
import { AssignmentController } from './assignment.controller'; // Import the controller

@Module({
  imports: [],
  controllers: [AssignmentController], // Register it here
  providers: [],
})
export class AppModule {}
