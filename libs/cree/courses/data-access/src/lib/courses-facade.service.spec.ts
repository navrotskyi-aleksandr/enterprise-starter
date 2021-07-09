import { TestBed } from '@angular/core/testing';
import { CoursesFacadeService } from './courses-facade.service';
import { CreeCoursesDataAccessModule } from './cree-courses-data-access.module';

describe('CoursesFacadeService', () => {
  let service: CoursesFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreeCoursesDataAccessModule],
    });
    service = TestBed.inject(CoursesFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
