import { Module } from '@nestjs/common';
import { AssignmentsController } from './assignment.controller';  // Correct import

@Module({
  imports: [],
  controllers: [AssignmentsController],  // Register the controller here
  providers: [],
})
export class AppModule {}
