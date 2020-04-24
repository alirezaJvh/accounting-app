import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CommonService} from '../../../../../shared/common/common.service';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
    selector: 'customer-code-page',
    templateUrl: './customer-code.page.html',
    styleUrls: ['./customer-code.page.scss', '../../../../../../assets/style/page-style.scss']
})

export class CustomerCodePage {
    constructor(public modalController: ModalController,
                private barcodeScanner: BarcodeScanner,
                private commonService: CommonService,
                private http: HttpClient,
                private router: Router) {
    }

    sannerLoading = false;

    async openCustomerCodeModal() {
        const modal = await this.modalController.create({
            component: CustomerCodeModal
        });
        return await modal.present();
    }

    scanCustomer() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.sendRequest(barcodeData.text);
        }).catch(err => {
            this.commonService.showMessage('لطفا مجددا تلاش کنید', 'error-msg');
        });
    }

    sendRequest(id) {
        this.sannerLoading = true;
        // tslint:disable-next-line:radix
        const param = {
            id
        };
        this.http.post('http://127.0.0.1:9000/v1/shop/customer/list', param, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .subscribe(
                val => {
                    this.sannerLoading = false;
                    localStorage.setItem('customer', JSON.stringify(val));
                    this.router.navigate(['/home/sale/product-info/customer/final']);
                },
                err => {
                    console.log(err);
                    this.sannerLoading = false;
                    if (err.status === 404) {
                        this.commonService.showMessage(err.error, 'error-msg');
                    } else {
                        this.commonService.showMessage('خطایی رخ داده است', 'error-msg');
                    }
                }
            );
    }
}

@Component({
    selector: 'customer-code-module',
    templateUrl: './customer-code-modal/customer-code-modal.html',
    styleUrls: ['./customer-code-modal/customer-code-modal.scss']
})

export class CustomerCodeModal implements OnInit {

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
        if (this.loading) return;
        // tslint:disable-next-line:radix
        const param = {
            id: this.formGroup.get('code').value
        }
        if (this.isValid(param)) {
            this.loading = true;
            this.http.post('http://127.0.0.1:9000/v1/shop/customer/list', param, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe(
                    val => {
                        this.loading = false;
                        localStorage.setItem('customer', JSON.stringify(val));
                        this.dismissModal();
                        this.router.navigate(['/home/sale/product-info/customer/final']);
                    },
                    err => {
                        console.log(err);
                        if (err.status === 404) {
                            this.commonService.showMessage(err.error, 'error-msg');
                        } else {
                            this.commonService.showMessage('خطایی رخ داده است', 'error-msg');
                        }
                        this.loading = false;
                    }
                );
        }
    }

    isValid(param) {
        if (param !== '') {
            return true;
        } else {
            this.commonService.showMessage('این فیلد الزامی است', 'error-msg');
            return false;
        }
    }
}
