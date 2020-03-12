import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CommonService} from '../../../shared/common/common.service';

@Component({
    selector: 'page-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})

export class LoginPage implements OnInit {
    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private http: HttpClient,
                private commonService: CommonService) {
    }

    formGroup: FormGroup;
    loading = false;

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
        this.commonService.isLogin();
    }

    isValid(param) {
        if (param.username !== '') {
            if (param.password !== '') {
                return true;
            } else {
                this.commonService.showMessage('رمز عبور نمیتواند خالی باشد', 'error-msg');
                return false
            }
        } else {
            this.commonService.showMessage('نام کاربری نمیتواند خالی باشد', 'error-msg');
            return false;
        }
    }

    login() {
        const param = {
            username: this.formGroup.get('username').value,
            password: this.formGroup.get('password').value,
            grant_type: 'password'
        };
        if (this.isValid(param)) {
            let sp = Object.keys(param).map((key) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
            }).join('&');
            this.loading = true;
            this.http.post<any>('http://127.0.0.1:9000/oauth/token', sp, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: 'Basic ZW5nX2FwcDplbmdfYXBw'
                }
            })
                .subscribe(
                    val => {
                        localStorage.setItem('token', val.access_token);
                        localStorage.setItem('user', JSON.stringify(val.user));
                        this.commonService.setUser(val.user);
                        this.commonService.locateFirstPage();
                        this.loading = false;
                        this.commonService.showMessage('خوش آمدید.', 'success-msg');

                    },
                    err => {
                        console.log(err)
                        if (err.status === 400) {
                            this.loading = false;
                            this.commonService.showMessage('نام کاربری و رمز عبور با هم تطابق ندارند', 'error-msg')
                        }
                    }
                );
        }

    }

    signup() {
        this.router.navigate(['/auth/sing_up']);
    }
}
