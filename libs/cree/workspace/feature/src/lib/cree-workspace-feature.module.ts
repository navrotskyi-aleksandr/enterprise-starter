import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreeWorkspaceFeatureRoutingModule } from './cree-workspace-feature-routing.module';
import { WorkspaceComponent } from './workspace/workspace.component';

@NgModule({
  imports: [CommonModule, CreeWorkspaceFeatureRoutingModule],
  declarations: [WorkspaceComponent],
})
export class CreeWorkspaceFeatureModule {}
