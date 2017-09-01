import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {environment} from '../../environments/environment';

declare var $;
@Component({
    templateUrl: './guestBook.component.html',
    styleUrls: ['./guestBook.component.css']
})
export class GuestBookComponent {
    public messageForm: FormGroup;
    public readBookData: any;
    public errorMsg: any;
    public errorMsgBook: any;
    constructor(
        private http: Http,
        private router: Router,
        private _fb: FormBuilder, ) {
    }
    ngOnInit() {
        this.readBook();
        this.createmessageForm();
    }
    createmessageForm() {
        this.messageForm = this._fb.group({
            phone: [],
            message: [],
        });
    }
    messageSubmit() {
        this.writeBook(this.messageForm.value);
    }
    readBook() {
        let params = new URLSearchParams();
        return this.http
            .get(environment.apiUrl+'read', this.userHeaders).map(response => response.json())
            .subscribe(data => {
                this.readBookData = data;
                console.log(this.readBookData);
            });
    }
    writeBook(formValue) {
        return this.http
            .post(environment.apiUrl+'write', JSON.stringify(formValue), this.userHeaders()).map(response => response.json())
            .subscribe(data => {
                this.readBookData = data;
            },
            (err) => {
                    this.errorMsgBook = 'You Are Not Logged In';
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
