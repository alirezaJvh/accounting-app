import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'page-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})

export class LoginPage {
    constructor(private router: Router) {
    }

    login() {
        this.router.navigate(['/home']);
    }

    signup() {
        this.router.navigate(['/auth/sing_up']);
    }
}
