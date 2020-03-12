import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CommonService} from '../../../shared/common/common.service';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
    selector: 'order-page',
    templateUrl: './order.page.html',
    styleUrls: ['./order.page.scss', '../../../../assets/style/page-style.scss']
})

export class OrderPage {
    constructor(public modalController: ModalController,
                private barcodeScanner: BarcodeScanner,
                private commonService: CommonService,
                private http: HttpClient,
                private router: Router) {
    }

    sannerLoading = false;

    async presentCodeModal() {
        const modal = await this.modalController.create({
            component: CodeModalPage,
        });
        return await modal.present();
    }

    scanner() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.sendRequest(barcodeData.text);
        }).catch(err => {
            this.commonService.showMessage('لطفا مجددا تلاش کنید', 'error-msg');
        });
    }

    getUsername() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user.username;
    }

    sendRequest(id) {
        this.sannerLoading = true;
        const param = {
            id
        };
        this.http.post('http://127.0.0.1:9000/v1/shop/product/search', param, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .subscribe(
                val => {
                    localStorage.setItem('product-list', JSON.stringify(val));
                    const list: any = val;
                    if (list.length) {
                        this.router.navigate(['/home/order/product-list']);
                    } else {
                        this.commonService.showMessage('محصولی موجود نمیباشد', 'error-msg');
                    }
                    this.sannerLoading = false;
                },
                error => {
                    console.log(error);
                    this.sannerLoading = false;
                    this.commonService.showMessage('خطایی رخ داده است', 'error-msg');
                }
            );
    }

}

@Component({
    selector: 'code-modal-page',
    templateUrl: './modal/code-modal.html',
    styleUrls: ['./modal/code-modal.scss']
})

export class CodeModalPage implements OnInit {

    constructor(public modalCntr: ModalController,
                private http: HttpClient,
                private formBuilder: FormBuilder,
                private router: Router,
                private commonService: CommonService,
    ) {
    }

    formGroup: FormGroup;
    loading = false;

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            code: new FormControl('')
        });
    }

    dismissModal() {
        this.modalCntr.dismiss();
    }

    sendRequest() {
        if (this.loading) return
        const param = {
            id: this.formGroup.get('code').value
        };
        if (this.isValid(param)) {
            this.loading = true;
            this.http.post('http://127.0.0.1:9000/v1/shop/product/search', param, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe(
                    val => {
                        console.log(val);
                        this.loading = false;
                        localStorage.setItem('product-list', JSON.stringify(val));
                        this.dismissModal();
                        const list: any = val;
                        if (list.length) {
                            this.router.navigate(['/home/order/product-list']);
                        } else {
                            this.commonService.showMessage('محصولی موجود نمیباشد', 'error-msg');
                        }
                    },
                    err => {
                        console.log(err);
                    }
                );
        }

    }

    isValid(param) {
        if (param.id !== '') {
            return true;
        } else {
            this.commonService.showMessage('این فیلد الزامی است', 'error-msg');
            return false;
        }
    }
}
