import { AlbumComponent } from './album/album.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ArtistComponent } from './artist/artist.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AlbumDetailComponent } from './album/album-detail/album-detail.component';
import { AlbumEditComponent } from './album/album-edit/album-edit.component';
import { ArtistEditComponent } from './artist/artist-edit/artist-edit.component';
import { ArtistDetailComponent } from './artist/artist-detail/artist-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
    AlbumDetailComponent,
    AlbumComponent,
    AlbumEditComponent,
    ArtistEditComponent,
    ArtistDetailComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
