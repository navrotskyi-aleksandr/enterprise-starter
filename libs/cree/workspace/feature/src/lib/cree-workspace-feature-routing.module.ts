import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkspaceComponent } from './workspace/workspace.component';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([{ path: '', pathMatch: 'full', component: WorkspaceComponent }])],
  exports: [RouterModule],
})
export class CreeWorkspaceFeatureRoutingModule {}
