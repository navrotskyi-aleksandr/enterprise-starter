import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([{ path: '', pathMatch: 'full', component: UserProfileComponent }])],
  exports: [RouterModule],
})
export class CreeUserProfileFeatureRoutingModule {}
