import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'portal-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type = 'Btn Type';
}
