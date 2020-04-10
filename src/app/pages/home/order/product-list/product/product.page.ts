import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ModalController, NavParams} from '@ionic/angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommonService} from '../../../../../shared/common/common.service';

@Component({
    selector: 'product-page',
    templateUrl: './product.page.html',
    styleUrls: ['./product.scss']
})

export class ProductPage implements OnInit {

    constructor(private route: ActivatedRoute,
                private http: HttpClient,
                public modalController: ModalController,
                private commonService: CommonService) {
    }

    obj: any;
    sizes: any;

    ngOnInit(): void {
        this.getId();
        this.getSizes();
    }

    getId() {
        this.obj = JSON.parse(localStorage.getItem('product'));
        // console.log('here')
        // console.log(this.obj);
    }

    getSizes() {
        const param = {
            id: this.obj.product.id
        };
        // console.log(param);
        this.http.post('http://127.0.0.1:9000/v1/shop/product/sizes', param, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .subscribe(
                val => {
                    console.log(val);
                    this.sizes = val;
                }
            );
    }

    async openModal() {
        const modal = await this.modalController.create({
            component: ProductModal,
            componentProps: {
                data: this.obj,
                sizes: this.sizes
            }
        });
        return await modal.present();
    }
}

@Component({
    selector: 'product-modal',
    templateUrl: './modal/product-modal.html',
    styleUrls: ['./modal/product-modal.scss']
})

export class ProductModal implements OnInit {
    constructor(public modalCntr: ModalController,
                private http: HttpClient,
                private formBuilder: FormBuilder,
                private navaParam: NavParams,
                private commonService: CommonService) {
    }

    data: any;
    sizes: any;
    loading = false;
    submitLoading = false;
    reservoirList: any;
    toId: any;
    orderSized = [];

    ngOnInit(): void {
        this.data = this.navaParam.get('data');
        console.log('data')
        console.log(this.data)
        this.sizes = this.navaParam.get('sizes');
        this.getReservoirList();
        this.setOrderSizeObj();
    }

    setOrderSizeObj() {
        // console.log(this.sizes);
        for (const item of this.sizes) {
            this.orderSized.push({
                id: item.size.id,
                value: '',
                size: item.size.value
            });
        }
        // console.log(this.orderSized);
    }

    getReservoirList() {
        this.loading = true;
        const param = {
            name: '',
        };
        this.http.post<any>('http://127.0.0.1:9000/v1/shop/reservoir/list', param, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .subscribe(
                (val) => {
                    this.loading = false;
                    this.reservoirList = val;
                    // console.log(val);

                },
                response => {
                    this.loading = false;
                });
    }

    getUserId() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user.id;
    }

    prepareData() {
        const param = {
            source: {
                id: this.data.product.reservoir.id
            },
            destination: {
                id: this.destinationReservoir()
            },
            product: {
                // tslint:disable-next-line:radix
                id: this.data.product.id
            },
            submitter: {
                id: this.getUserId()
            },
            orders: JSON.stringify(this.orderSized)
            // tslint:disable-next-line:radix
        };
        return param;
    }

    destinationReservoir() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user.reservoir.id;
    }

    sendRequest() {
        if (this.isValid()) {
            this.submitLoading = true;
            // console.log(this.orderSized);
            const param = this.prepareData();
            this.http.post('http://127.0.0.1:9000/v1/shop/order/submit', param, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            })
                .subscribe(
                    (val) => {
                        this.submitLoading = false;
                        this.commonService.showMessage('عملیات با موفقیت انجام شد.', 'success-msg');
                        this.dismissModal();
                    },
                    err => {
                        console.log(err);
                    });
        }

    }

    isValid() {
        if (this.originAndDestinatinoDifferent()) {
            if (this.isNumberOfRequestLessThanRemainder()) {
                if (this.commonService.getUser().reservoir) {
                    return true;
                }
                return false;
            } else {
                this.commonService.showMessage('تعداد درخواستی از تعدا موجودی بیشتر است ', 'error-msg');
            }
        } else {
            this.commonService.showMessage('مبدا و مقصد نمیتواند یکی باشد', 'error-msg');
            return false;
        }
    }

    isNumberOfRequestLessThanRemainder() {
        for (const index in this.sizes) {
            if (this.sizes[index].count < this.orderSized[index].value) {
                return false;
            }
        }
        return true;
    }

    originAndDestinatinoDifferent() {
        return this.toId !== this.data.product.reservoir.id;
    }

    hasDestination() {
        return this.toId !== undefined;
    }


    dismissModal() {
        this.modalCntr.dismiss();
    }
}
