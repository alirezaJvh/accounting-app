import {Component} from '@angular/core';


@Component({
    selector: 'page-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss']
})

export class SignupPage {

    inputs = [
        {
            icon: '../../../../assets/image/auth/person-icon.png',
            placeholder: 'نام و نام خانوادگی'
        },
        {
            icon: '../../../../assets/image/auth/person-icon.png',
            placeholder: 'نام کاربری'
        },
        {
            icon: '../../../../assets/image/auth/password-icon.png',
            placeholder: 'شماره موبایل'
        },
        {
            icon: '../../../../assets/image/auth/password-icon.png',
            placeholder: 'ایمیل'
        },
        {
            icon: '../../../../assets/image/auth/password-icon.png',
            placeholder: 'رمز عبور'
        },
    ];
}
