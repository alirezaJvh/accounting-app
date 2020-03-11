import {AfterViewInit, Component} from '@angular/core';

@Component({
    selector: 'train-page',
    templateUrl: './train.page.html',
    styleUrls: ['./trian.page.scss']
})

export class TrainPage implements AfterViewInit {

    trains = [
        {
            img: '../../../../../../../assets/image/home/field/training/train/pexels_photo_235922.jpg',
            text: 'کشش سر شانه',
            time: '۰۰:۳۰'
        },
        {
            img: '../../../../../../../assets/image/home/field/training/train/pexels_photo_235922.jpg',
            text: 'کشش سر شانه',
            time: '۰۰:۳۰'
        },
        {
            img: '../../../../../../../assets/image/home/field/training/train/pexels_photo_235922.jpg',
            text: 'کشش سر شانه',
            time: '۰۰:۳۰'
        },
        {
            img: '../../../../../../../assets/image/home/field/training/train/pexels_photo_235922.jpg',
            text: 'کشش سر شانه',
            time: '۰۰:۳۰'
        },
        {
            img: '../../../../../../../assets/image/home/field/training/train/pexels_photo_235922.jpg',
            text: 'کشش سر شانه',
            time: '۰۰:۳۰'
        },
        {
            img: '../../../../../../../assets/image/home/field/training/train/pexels_photo_235922.jpg',
            text: 'کشش سر شانه',
            time: '۰۰:۳۰'
        }
    ];

    ngAfterViewInit(): void {
        const menu = document.getElementById('train-menu');
        const search = document.getElementById('search');
        const trainImage = document.getElementById('train-image');
        menu.style.marginTop = `calc(${trainImage.offsetHeight}px - 35px)`;
        menu.parentElement.style.width = '100%';
    }

    private headerSize = 150;

    handleScrollEvent(e) {
        this.headerSize = e;
        const menu = document.getElementById('train-menu');
        const trainImage = document.getElementById('train-image');
        if (e < 100) {
            console.log('here');
            trainImage.style.transition = 'all 0.6s';
            trainImage.classList.add('primary-bg');
            menu.classList.add('menu-border-radius-zero');
            menu.style.transition = 'all 0.6s';
        } else {
            trainImage.classList.remove('primary-bg');
            trainImage.style.transition = 'all 0.6s';
            menu.classList.remove('menu-border-radius-zero');
            menu.style.transition = 'margin-top 0.1s';
        }
        menu.style.marginTop = `calc(${e}px - 35px)`;
        window.scrollTo(0, 120);
    }


}
