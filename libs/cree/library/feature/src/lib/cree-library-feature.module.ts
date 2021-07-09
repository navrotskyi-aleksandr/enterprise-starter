import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreeLibraryFeatureRoutingModule } from './cree-library-feature-routing.module';
import { LibraryComponent } from './library/library.component';

@NgModule({
  imports: [CommonModule, CreeLibraryFeatureRoutingModule],
  declarations: [LibraryComponent],
})
export class CreeLibraryFeatureModule {}
