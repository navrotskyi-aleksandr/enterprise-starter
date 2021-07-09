import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([{ path: '', pathMatch: 'full', component: PageNotFoundComponent }])],
  exports: [RouterModule],
})
export class CreePageNotFoundFeatureRoutingModule {}
