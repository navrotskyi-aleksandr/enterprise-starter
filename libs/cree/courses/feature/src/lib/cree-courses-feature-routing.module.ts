import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([{ path: '', pathMatch: 'full', component: CoursesComponent }])],
  exports: [RouterModule],
})
export class CreeCoursesFeatureRoutingModule {}
