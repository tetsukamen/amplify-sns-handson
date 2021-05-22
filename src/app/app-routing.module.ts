import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostComponent } from './all-post/all-post.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AllPostComponent,
  },
  {
    path: 'profile/:username',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
