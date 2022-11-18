import { Route } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Route[] = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'about', component: AboutComponent },
            { path: 'user', component: UserComponent },
            { path: 'user/add', component: UserAddComponent },
            { path: 'user/detail/:id', component: UserDetailComponent },
            { path: 'user/detail/:id/edit', component: UserEditComponent },




        ]
    },
];
