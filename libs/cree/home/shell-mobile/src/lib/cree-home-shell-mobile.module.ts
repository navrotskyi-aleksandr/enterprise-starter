import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('@portal/cree/home/feature').then(module => module.CreeHomeFeatureModule),
      },
    ]),
  ],
})
export class CreeHomeShellMobileModule {}
