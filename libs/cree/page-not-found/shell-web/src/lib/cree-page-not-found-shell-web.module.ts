import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreePageNotFoundFeatureModule } from '@portal/cree/page-not-found/feature';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => CreePageNotFoundFeatureModule,
      },
    ]),
  ],
})
export class CreePageNotFoundShellWebModule {}
