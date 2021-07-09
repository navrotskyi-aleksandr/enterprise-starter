import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreeCoursesFeatureModule } from '@portal/cree/courses/feature';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => CreeCoursesFeatureModule,
      },
    ]),
  ],
})
export class CreeCoursesShellWebModule {}
