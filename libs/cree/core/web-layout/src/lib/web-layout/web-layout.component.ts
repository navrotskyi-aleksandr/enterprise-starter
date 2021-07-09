import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portal-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebLayoutComponent {}
