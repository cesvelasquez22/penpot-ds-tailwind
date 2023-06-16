import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then( (m) => m.WelcomeModule ) },
        {
            path: 'atoms',
            children: [
                {path: 'typo-brand', loadChildren: () => import('./atoms/typo-brand/typo-brand.module').then( (m) => m.TypoBrandModule )},
                {path: 'typo-interface', loadChildren: () => import('./atoms/typo-interface/typo-interface.module').then( (m) => m.TypoInterfaceModule )},
            ],
        },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ],
  },
];
