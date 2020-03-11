import {AfterViewInit, Component} from '@angular/core';
import {Location} from '@angular/common';
@Component({
    selector: 'coach-page',
    styleUrls: ['./coach.page.scss'],
    templateUrl: './coach.page.html'
})

export class CoachPage implements AfterViewInit {

    constructor(private _location: Location){}

    private headerSize = 150;
    private initCourseContainerHeight: number;
    course = [
        {
            day: ' زوج',
            start: '3/01/1398',
            end: '3/02/1398',
            time: '9-12',
            price: '300,000'
        },
        {
            day: ' زوج',
            start: '3/01/1398',
            end: '3/02/1398',
            time: '9-12',
            price: '300,000'
        },
        {
            day: ' زوج',
            start: '3/01/1398',
            end: '3/02/1398',
            time: '9-12',
            price: '300,000'
        },
    ];

    ngAfterViewInit(): void {
        const menu = document.getElementById('coach-menu');
        const coachImage = document.getElementById('coach-image');
        menu.style.marginTop = `calc(${coachImage.offsetHeight}px - 35px)`;
        menu.parentElement.style.width = '100%';
    }

    handleScrollEvent(e) {
        this.headerSize = e;
        const menu = document.getElementById('coach-menu');
        const coachImage = document.getElementById('coach-image');
        const headerName = document.getElementById('header-name');
        if (e < 100) {
            console.log('here');
            coachImage.style.transition = 'all 0.6s';
            coachImage.classList.add('primary-bg');
            menu.classList.add('menu-border-radius-zero');
            menu.style.transition = 'all 0.6s';
            headerName.classList.remove('hidden');
        } else {
            coachImage.classList.remove('primary-bg');
            coachImage.style.transition = 'all 0.6s';
            menu.classList.remove('menu-border-radius-zero');
            menu.style.transition = 'margin-top 0.1s';
            headerName.classList.add('hidden');
        }
        menu.style.marginTop = `calc(${e}px - 35px)`;
    }


    openCourseMenu() {
        const courseBtn = document.getElementById('course-btn');
        const courseContainer = document.getElementById('course-container');
        const course = document.getElementById('course');
        const coachImage = document.getElementById('coach-image');
        const closeCourseList = document.getElementById('close-course-list');
        this.initCourseContainerHeight = courseContainer.offsetHeight;
        course.classList.remove('hidden');
        courseBtn.style.display = 'none';
        courseBtn.style.transition = 'all 0.5s';
        closeCourseList.classList.remove('hidden');
        if (this.headerSize < 100) {
            courseContainer.style.height = 'calc(100% - 50px)';
        } else {
            courseContainer.style.height = `calc(100% - ${coachImage.offsetHeight}px + 35px)`;
        }
        courseContainer.style.transition = 'all 0.5s';
    }

    closeCourseList() {
        const courseContainer = document.getElementById('course-container');
        const course = document.getElementById('course');
        const courseBtn = document.getElementById('course-btn');
        const closeCourseList = document.getElementById('close-course-list');
        closeCourseList.classList.add('hidden');
        course.style.transition = 'display 0.5s';
        course.classList.add('hidden');
        courseBtn.style.display = 'block';
        courseContainer.style.height = `${this.initCourseContainerHeight}px`;
        courseContainer.style.transition = 'all 0.5s';
    }

    backRoute() {
        console.log('here')
        this._location.back();
    }
}
