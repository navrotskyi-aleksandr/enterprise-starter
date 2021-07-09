import { Injectable } from '@angular/core';
import { CreeCoursesDataAccessModule } from './cree-courses-data-access.module';

@Injectable({
  providedIn: CreeCoursesDataAccessModule,
})
export class CoursesFacadeService {
  constructor() {
    console.log('facade Test');
  }
}
