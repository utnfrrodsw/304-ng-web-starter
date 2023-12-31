import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BioComponent } from './bio/bio.component';
import { AuthGuard } from './auth.guard';
import { MrxComponent } from './mrx/mrx/mrx.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
  },
  {
    path: 'bio',
    component: BioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bio/:id/:name',
    component: BioComponent
  },
  {
    path: 'mrx',
    component: MrxComponent,
  },
  // {
  //   path: 'contacto',
  //   loadChildren: () => import('./contact/contact.module').then(module => module.ContactModule),
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
