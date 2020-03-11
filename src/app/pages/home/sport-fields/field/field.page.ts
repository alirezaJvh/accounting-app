import {AfterViewInit, Component} from '@angular/core';

@Component({
    selector: 'field-page',
    templateUrl: './field.page.html',
    styleUrls: ['./field.page.scss']
})

export class FieldPage implements AfterViewInit {

    ngAfterViewInit(): void {
        const menu = document.getElementById('menu');
        const search = document.getElementById('search');
        const fieldImage = document.getElementById('field-image');
        menu.style.marginTop = `calc(${fieldImage.offsetHeight}px - 35px)`;
        menu.parentElement.style.width = '100%';
    }

    private headerSize = 150;

    handleScrollEvent(e) {
        this.headerSize = e;
        const menu = document.getElementById('menu');
        const imageField = document.getElementById('field-image');
        if (e < 100) {
            console.log('here');
            imageField.style.transition = 'all 0.6s';
            imageField.classList.add('primary-bg');
            menu.classList.add('menu-border-radius-zero');
            menu.style.transition = 'all 0.6s';
        } else {
            imageField.classList.remove('primary-bg');
            imageField.style.transition = 'all 0.6s';
            menu.classList.remove('menu-border-radius-zero');
            menu.style.transition = 'margin-top 0.1s';
        }
        menu.style.marginTop = `calc(${e}px - 35px)`;
        window.scrollTo(0, 120);
    }

    constructor() {
    }


}
