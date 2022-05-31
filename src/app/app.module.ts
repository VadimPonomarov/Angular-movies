import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {HeaderComponent} from './components/header/header.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {RegisterComponent} from './components/register/register.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {GenresComponent} from './components/tools/filters/genres/genres.component';
import {ShowMeComponent} from './components/tools/filters/show-me/show-me.component';
import {LanguageComponent} from './components/tools/filters/language/language.component';
import {ExtrasComponent} from './components/tools/filters/extras/extras.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {SidebarComponent} from './components/tools/sidebar/sidebar.component';
import {ApiService} from "./services";
import {NgxSliderModule} from "@angular-slider/ngx-slider";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    MainLayoutComponent,
    MainPageComponent,
    RegisterComponent,
    GenresComponent,
    ShowMeComponent,
    LanguageComponent,
    ExtrasComponent,
    HomePageComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSliderModule

  ],
  providers: [HttpClient, AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
