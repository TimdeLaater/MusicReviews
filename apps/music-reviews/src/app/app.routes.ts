import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ArtistDetailComponent } from './artist/artist-detail/artist-detail.component';
import { ArtistEditComponent } from './artist/artist-edit/artist-edit.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumAddComponent } from './album/album-add/album-add.component';
import { AlbumDetailComponent } from './album/album-detail/album-detail.component';
import { AlbumComponent } from './album/album.component';
import { Route } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Route[] = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'about', component: AboutComponent },
            { path: 'album', component: AlbumComponent },
            { path: 'album/add', component: AlbumAddComponent },
            { path: 'album/detail/:id', component: AlbumDetailComponent },
            { path: 'artist', component: ArtistComponent },
            { path: 'artist/add', component: ArtistEditComponent },
            { path: 'artist/detail/:id', component: ArtistDetailComponent },
            { path: 'artist/detail/:id/edit', component: ArtistEditComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },





        ]
    },
];
