import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([{ path: '', pathMatch: 'full', component: HomeComponent }])],
  exports: [RouterModule],
})
export class CreeHomeFeatureRoutingModule {}
