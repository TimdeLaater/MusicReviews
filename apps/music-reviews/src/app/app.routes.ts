import { Route } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

export const appRoutes: Route[] = [
    
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'user' },
            { path: 'dashboard', component: DashboardComponent },
            //   { path: 'about', component: AboutComponent },
            { path: 'user', component: UserComponent },
            //   { path: 'user/add', component: AddUserComponent },
            //   { path: 'user/detail/:id', component: UserDetailComponent },
            //   { path: 'user/detail/:id/edit', component: UserEditComponent },




        ]
    },
];
