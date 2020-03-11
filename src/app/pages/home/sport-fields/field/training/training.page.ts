import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'training-page',
    templateUrl: './training.page.html',
    styleUrls: ['./training.page.scss']
})

export class TrainingPage {
    constructor(private router: Router){}
    training = [
        {
            class: 'mt-5 mb-2 right-in-animation ',
            image: '../../../../../../assets/image/home/field/training/image_35-compressor.jpg',
            gradient: 'linear-gradient(#aa1737, #d2b1b8)',
            text: 'دوچرخه سواری',
            link: 'home/sport-fields/5/training/5'
        },
        {
            class: 'my-2 left-in-animation',
            image: '../../../../../../assets/image/home/field/training/image_36-compressor.jpg',
            gradient: 'linear-gradient(#00c853, #00642a)',
            text: 'پیاده روی',
            link: 'home/sport-fields/5/training/6'
        },
        {
            class: 'my-2 left-in-animation ',
            image: '../../../../../../assets/image/home/field/training/image_37-compressor.jpg',
            gradient: 'linear-gradient(#b300f2, #9b69ac)',
            text: 'یوگا',
            link: 'home/sport-fields/5/training/7'
        },
        {
            class: 'mt-2 mb-4 right-in-animation ',
            image: '../../../../../../assets/image/home/field/training/pexels_photo_1887089-compressor.jpg',
            gradient: 'linear-gradient(#272b73, #14163a)',
            text: 'یوگا',
            link: 'home/sport-fields/5/training/8'
        },
    ];

    routeTo(route) {
        this.router.navigate([route]);
    }
}
