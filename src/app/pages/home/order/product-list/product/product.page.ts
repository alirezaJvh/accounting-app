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
                public modalController: ModalController) {
    }

    obj: any;
    sizes: any;

    ngOnInit(): void {
        this.getId();
        this.getSizes();
    }

    getId() {
        this.obj = JSON.parse(localStorage.getItem('product'));
        console.log(this.obj);
    }

    getSizes() {
        const param = {
            id: this.obj.product.id
        };
        console.log(param);
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
        })
        return await modal.present();
    }
}

@Component({
    selector: 'product-modal',
    templateUrl: './modal/product-modal.html',
    styleUrls: ['./modal/product-modal.scss']
})

export class ProductModal implements OnInit{
    constructor(public modalCntr: ModalController,
                private http: HttpClient,
                private formBuilder: FormBuilder,
                private navaParam: NavParams,
                private commonService: CommonService) {
    }

    data: any;
    sizes: any;
    loading = false;
    reservoirList: any;
    toId: any;
    orderSized = [];

    ngOnInit(): void {
        this.data = this.navaParam.get('data');
        this.sizes = this.navaParam.get('sizes');
        this.getReservoirList();
        this.setOrderSizeObj();
    }

    setOrderSizeObj() {
        console.log(this.sizes)
        for (const item of this.sizes) {
            this.orderSized.push({
                id: item.size.id,
                value: '',
                size: item.size.value
            });
        }
        console.log(this.orderSized);
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
                    console.log(val);

                },
                response => {
                    this.loading = false;
                });
    }

    prepareData() {
        const param = {
            source: {
                id: this.data.product.reservoir.id
            },
            destination: {
                id: this.toId
            },
            product: {
                // tslint:disable-next-line:radix
                id: this.data.product.id
            },
            orders: JSON.stringify(this.orderSized)
            // tslint:disable-next-line:radix
        };
        return param
    }

    sendRequest() {
        console.log(this.toId);
        console.log(this.orderSized);
        const param = this.prepareData();
        this.http.post('http://127.0.0.1:9000/v1/shop/order/submit', param, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        })
            .subscribe(
                (val) => {
                    this.commonService.showMessage('عملیات با موفقیت انجام شد.', 'success-msg');
                    this.dismissModal();
                },
                response => {
                });
    }


    dismissModal() {
        this.modalCntr.dismiss();
    }
}