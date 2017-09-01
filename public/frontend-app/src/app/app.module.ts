import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {RouterModule, PreloadAllModules} from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {GuestBookComponent} from './guestBook/guestBook.component';
import {LogoutComponent} from './logout/logout.component';
import {StatesComponent} from './states/states.component';
import {ObjectArrayPipe} from './pipes/objectToArray.pipe';
import {ROUTES} from './app.routes';
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        GuestBookComponent,
        StatesComponent,
        ObjectArrayPipe
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
    providers: [ CookieService ],
    bootstrap: [AppComponent],
})
export class AppModule {}
