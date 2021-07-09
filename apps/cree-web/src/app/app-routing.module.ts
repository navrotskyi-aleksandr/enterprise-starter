import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebLayoutComponent } from '@portal/cree/core/web-layout';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        loadChildren: () => import('@portal/cree/home/shell-web').then(module => module.CreeHomeShellWebModule),
      },
      {
        path: 'library',
        loadChildren: () => import('@portal/cree/library/shell-web').then(module => module.CreeLibraryShellWebModule),
      },
      {
        path: 'workspace',
        loadChildren: () =>
          import('@portal/cree/workspace/shell-web').then(module => module.CreeWorkspaceShellWebModule),
      },
      {
        path: 'courses',
        loadChildren: () => import('@portal/cree/courses/shell-web').then(module => module.CreeCoursesShellWebModule),
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('@portal/cree/user-profile/shell-web').then(module => module.CreeUserProfileShellWebModule),
      },
    ],
  },
  {
    path: 'login',
  },
  {
    path: '**',
    loadChildren: () =>
      import('@portal/cree/page-not-found/shell-web').then(module => module.CreePageNotFoundShellWebModule),
  },
];

@NgModule({
  imports: [QuicklinkModule, RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })],
  exports: [RouterModule, QuicklinkModule],
})
export class AppRoutingModule {}
