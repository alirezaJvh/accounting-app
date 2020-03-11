import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ModalController, NavParams} from '@ionic/angular';
import {FormBuilder, FormGroup} from '@angular/forms';

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
                private navaParam: NavParams) {
    }

    ngOnInit(): void {
        console.log(this.navaParam.get('data'))
        console.log(this.navaParam.get('sizes'))
    }

    formGroup: FormGroup;
    loading = false;

    dismissModal() {
        this.modalCntr.dismiss();
    }
}
