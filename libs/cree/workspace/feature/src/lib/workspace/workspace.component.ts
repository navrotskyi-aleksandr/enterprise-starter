import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portal-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceComponent {}
