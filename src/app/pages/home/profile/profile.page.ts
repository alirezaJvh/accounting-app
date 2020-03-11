import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'page-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss']
})

export class  ProfilePage {
    constructor(private router: Router) {}
    items = [
        {
            icon: '../../../../assets/image/home/profile/edit_5.svg',
            text: 'ویرایش پروفایل',
            link: '/home/complete-profile'
        },
        {
            icon: '../../../../assets/image/home/profile/chat_2.svg',
            text: 'پرسش از ادمین ',
            link: '/home/complete-profile'
        },
        {
            icon: '../../../../assets/image/home/profile/lock_4.svg',
            text: 'تغییر رمز دوم ',
            link: '/home/complete-profile'
        },
    ];

    routeTo(link) {
        this.router.navigate([link]);
    }
}
