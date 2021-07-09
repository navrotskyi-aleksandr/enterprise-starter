import { NgModule } from '@angular/core';
import { CreeCoursesDataAccessModule } from '@portal/cree/courses/data-access';
import { CreeSharedUiComponentsButtonModule } from '@portal/cree/shared/ui-components';
import { CoursesComponent } from './courses/courses.component';
import { CreeCoursesFeatureRoutingModule } from './cree-courses-feature-routing.module';

@NgModule({
  imports: [CreeCoursesDataAccessModule, CreeCoursesFeatureRoutingModule, CreeSharedUiComponentsButtonModule],
  declarations: [CoursesComponent],
})
export class CreeCoursesFeatureModule {}
