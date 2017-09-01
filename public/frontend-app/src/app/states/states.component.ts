import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {environment} from '../../environments/environment';
@Component({
    templateUrl: './states.component.html',
    styleUrls: ['./states.component.css']
})
export class StatesComponent {
    public formValue: any;
    public allStatesData: any;
    public singleStatesData: any;
    public allAbbreviationsData: any;
    public errorMsg: any;
    constructor(
        private http: Http,
        private router: Router,
        private route: ActivatedRoute,
        private _fb: FormBuilder, ) {
    }
    ngOnInit() {
        this.getUrlParam();
        this.getAllAbbreviations();
    }
    getUrlParam() {
        this.route.params.subscribe(
            params => {
                if (params.abbreviation) {
                    this.getSingleStateData(params.abbreviation);
                    console.log(params.abbreviation);
                } else {
                    this.getAllStates();
                }
            });
    }
    getAllStates() {
        let params = new URLSearchParams();
        return this.http
            .get(environment.apiUrl+'states', this.userHeaders).map(response => response.json())
            .subscribe(data => {
                this.allStatesData = data;
                console.log(this.allStatesData);
            });
    }
    getSingleStateData(state) {
        let params = new URLSearchParams();
        return this.http
            .get(environment.apiUrl+'states/' + state, this.userHeaders).map(response => response.json())
            .subscribe(data => {
                this.singleStatesData = data;
                console.log(this.singleStatesData);
            });
    }
    getAllAbbreviations() {
        return this.http
            .get('http://202.164.36.10:8888/states/abbreviations', this.userHeaders).map(response => response.json())
            .subscribe(data => {
                this.allAbbreviationsData = data;
                console.log(this.allAbbreviationsData);
            });
    }
    userHeaders() {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Accept', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        let options = new RequestOptions({headers: headers});
        return options;
    }
}
