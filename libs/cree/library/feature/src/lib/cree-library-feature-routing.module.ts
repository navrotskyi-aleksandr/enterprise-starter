import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([{ path: '', pathMatch: 'full', component: LibraryComponent }])],
  exports: [RouterModule],
})
export class CreeLibraryFeatureRoutingModule {}
