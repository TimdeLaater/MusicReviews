import { AlbumComponent } from './album/album.component';
import { ReviewComponent } from './review/review.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ArtistComponent } from './artist/artist.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AlbumDetailComponent } from './album/album-detail/album-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
    ReviewComponent,
    UserComponent,
    UserAddComponent,
    UserDetailComponent,
    UserEditComponent,
    AboutComponent,
    AlbumDetailComponent,
    AlbumComponent,
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
export class AppModule { }
