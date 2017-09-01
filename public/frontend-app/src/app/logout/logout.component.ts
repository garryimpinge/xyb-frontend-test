import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {environment} from '../../environments/environment';
@Component({
    template:'You choose to Logout'
})
export class LogoutComponent {
    public errorMsg: any;
    constructor(
        private http: Http,
        private router: Router) {
        this.userLogout();
    }
    userLogout() {
        return this.http
            .get(environment.apiUrl+'logout', this.userHeaders())
            .subscribe(data => {
                this.router.navigate(['/'], {replaceUrl: true});
            },
            (err) => {
                this.errorMsg = err._body + 'User';
            });
    }
    userHeaders() {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        let options = new RequestOptions({headers: headers});
        return options;
    }
}