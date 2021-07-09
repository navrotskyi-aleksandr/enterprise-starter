import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CoursesFacadeService } from '@portal/cree/courses/data-access';

@Component({
  selector: 'portal-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {
  constructor(private facade: CoursesFacadeService) {}
}
