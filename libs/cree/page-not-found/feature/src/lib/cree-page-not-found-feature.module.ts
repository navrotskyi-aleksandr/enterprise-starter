import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreePageNotFoundFeatureRoutingModule } from './cree-page-not-found-feature-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule, CreePageNotFoundFeatureRoutingModule],
  declarations: [PageNotFoundComponent],
})
export class CreePageNotFoundFeatureModule {}
