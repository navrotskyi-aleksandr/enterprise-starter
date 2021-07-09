import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreeUserProfileFeatureRoutingModule } from './cree-user-profile-feature-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [CommonModule, CreeUserProfileFeatureRoutingModule],
  declarations: [UserProfileComponent],
})
export class CreeUserProfileFeatureModule {}
