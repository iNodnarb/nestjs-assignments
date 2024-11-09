import { Module } from '@nestjs/common';
import { AssignmentsController } from './assignment.controller';  // Import your controller

@Module({
  imports: [],
  controllers: [AssignmentsController],  // Declare the controller here
  providers: [],
})
export class AppModule {}
