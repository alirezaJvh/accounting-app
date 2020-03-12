import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../../shared/common/common.service';

@Component({
    selector: 'page-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss']
})

export class  ProfilePage implements OnInit{
    constructor(private router: Router,
                private commonService: CommonService) {}
    user: any;
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

    ngOnInit(): void {
        this.getUser();
    }

    getUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user)
    }

    routeTo(link) {
        this.router.navigate([link]);
    }
}
