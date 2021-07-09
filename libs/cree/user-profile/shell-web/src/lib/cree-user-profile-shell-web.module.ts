import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreeUserProfileFeatureModule } from '@portal/cree/user-profile/feature';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => CreeUserProfileFeatureModule,
      },
    ]),
  ],
})
export class CreeUserProfileShellWebModule {}
