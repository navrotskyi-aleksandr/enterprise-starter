import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreeSharedUiIconsLogoModule } from '@portal/cree/shared/ui-icons';
import { CreeHomeFeatureRoutingModule } from './cree-home-feature-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, CreeHomeFeatureRoutingModule, CreeSharedUiIconsLogoModule],
  declarations: [HomeComponent],
})
export class CreeHomeFeatureModule {}
