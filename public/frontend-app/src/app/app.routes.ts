import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {StatesComponent} from './states/states.component';
import {LogoutComponent} from './logout/logout.component';
import {GuestBookComponent} from './guestBook/guestBook.component';
export const ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'readBook', component: GuestBookComponent},
    {path: 'states', component: StatesComponent},
    {path: 'states/:abbreviation', component: StatesComponent},
{path: 'logout', component: LogoutComponent},
];
