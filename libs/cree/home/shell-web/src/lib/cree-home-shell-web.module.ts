import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreeHomeFeatureModule } from '@portal/cree/home/feature';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => CreeHomeFeatureModule,
      },
    ]),
  ],
})
export class CreeHomeShellWebModule {}
