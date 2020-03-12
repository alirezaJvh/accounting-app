import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {CommonService} from '../../shared/common/common.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private router: Router,
                private barcodeScanner: BarcodeScanner,
                private commonService: CommonService,
                private http: HttpClient) {
    }


    getUsername() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user.username;
    }

    scanBarcode() {
        let sizeId;
        this.barcodeScanner.scan().then(barcodeData => {
            // alert('Barcode data' + barcodeData.text);
            const sizeId = barcodeData.text;
            const userId = this.getUserId();
            this.sendRequest(sizeId, userId);
        }).catch(err => {
            this.commonService.showMessage('لطفا مجددا تلاش کنید', 'error-msg');
        });
    }

    sendRequest(sizeId, userId) {
        const param = {
            productSize: {
                id: sizeId
            },
            user: {
                id: userId
            }
        };
        this.http.post('http://127.0.0.1:9000/v1/shop/timeline/save', param, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .subscribe(
                val => {
                    console.log(val);
                    this.commonService.showMessage('عملیات با موفقت انجام شد', 'success-msg');
                },
                err => {
                    console.log(err);
                    this.commonService.showMessage('خطایی رخ داده است', 'error-msg');
                }
            );
    }

    getUserId() {
        const user = JSON.parse(localStorage.getItem('user'))
        console.log(user);
        return user.id;
    }


}
