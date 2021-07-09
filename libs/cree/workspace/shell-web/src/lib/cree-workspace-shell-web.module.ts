import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreeWorkspaceFeatureModule } from '@portal/cree/workspace/feature';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => CreeWorkspaceFeatureModule,
      },
    ]),
  ],
})
export class CreeWorkspaceShellWebModule {}
