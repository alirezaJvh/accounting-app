import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private router: Router) {
    }


    data = [
        [
            {
                icon: '../../../assets/image/home/newspaper%20(1).svg',
                title: {
                    text: 'حواله',
                    class: ''
                },
                link: 'home',
                class: 'margin-left-zero'
            },
            {
                icon: '../../../assets/image/home/ball-of-basketball.svg',
                title: {
                    text: 'فروش',
                    class: ''
                },
                link: 'home/sport-fields',
                class: 'margin-right-zero'
            }
        ],
      /*  [
            {
                icon: '../../../assets/image/home/running.svg',
                title: {
                    text: 'پویش تحرک',
                    class: 'pb-3'
                },
                link: 'home',
                class: 'margin-left-zero'
            },
            {
                icon: '../../../assets/image/home/shield (2).svg',
                title: {
                    text: 'بیمــــه ',
                    class: 'pb-3'
                },
                link: 'home',
                class: 'margin-right-zero'
            }
        ],
        [
            {
                icon: '../../../assets/image/home/running.svg',
                title: {
                    text: 'پویش تحرک',
                    class: 'pb-3'
                },
                link: 'home',
                class: 'margin-left-zero'
            },
            {
                icon: '../../../assets/image/home/shield (2).svg',
                title: {
                    text: 'بیمــــه ',
                    class: 'pb-3'
                },
                link: 'home',
                class: 'margin-right-zero'
            }
        ],*/
    ];

}
