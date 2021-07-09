import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreeLibraryFeatureModule } from '@portal/cree/library/feature';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => CreeLibraryFeatureModule,
      },
    ]),
  ],
})
export class CreeLibraryShellWebModule {}
