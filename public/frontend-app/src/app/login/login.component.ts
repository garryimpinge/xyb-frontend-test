import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import {environment} from '../../environments/environment';
@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public loginForm: FormGroup;
    public formValue: any;
    public cookieGenerated: any;
    public errorMsg: any;
    constructor(
        private http: Http,
        private _cookieService: CookieService,
        private router: Router,
        private _fb: FormBuilder, ) {
    }
    createLoginForm() {
        this.loginForm = this._fb.group({
            user: [],
            password: [],
        });
    }
    loginSubmit() {
        this.userLogin(this.loginForm.value);
    }
    ngOnInit() {
        this.createLoginForm();
    }
    userLogin(formValue) {
        return this.http
            .post(environment.apiUrl+'login', JSON.stringify(formValue), this.userHeaders()).map(res => res.json())
            .subscribe((response) => {
                this.router.navigate(['/readBook'], {replaceUrl: true});
            },
            (err) => {
                this.errorMsg = err._body + 'User';
            });
    }
    extractAllData(res: Response) {
        let body = res.json();
        return body;
    }
    getCookie(key: string) {
        return this._cookieService.get(key);
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
