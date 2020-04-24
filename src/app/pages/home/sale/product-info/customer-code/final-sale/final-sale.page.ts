import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../../../../../shared/common/common.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'sale-final',
    templateUrl: './final-sale.page.html',
    styleUrls: ['./final-sale.page.scss']
})

export class FinalSalePage implements OnInit {
    product: any;
    size: any;
    customer: any;
    obj: any;
    amount = 1;

    constructor(private router: Router,
                private http: HttpClient,
                private commonService: CommonService) {
    }

    ngOnInit(): void {
        this.getProduct();
        this.getCustomer();
    }

    getProduct() {
        if (localStorage.getItem('sale')) {
            this.obj = JSON.parse(localStorage.getItem('sale'));
            this.product = this.obj.product;
            this.size = this.obj.size;
        }
    }

    getCustomer() {
        if (localStorage.getItem('customer')) {
            this.customer = JSON.parse(localStorage.getItem('customer'));
            console.log(this.customer);
            this.customer = this.customer[0];
        }
    }

    cancel() {
        this.router.navigate(['/home']);
        localStorage.removeItem('sale');
        localStorage.removeItem('customer');
    }

    saveSale() {
        const param = this.prepareData();
        this.http.post('http://127.0.0.1:9000/v1/shop/sales/save', param, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .subscribe(
                val => {
                    console.log(val);
                    this.commonService.showMessage('خرید با موفقیت ثبت شد', 'success-msg');
                    this.router.navigate(['/home']);
                },
                err => {
                    console.log(err);
                    this.commonService.showMessage('حطایی رخ داده است', 'error-msg');
                    this.router.navigate(['/home']);
                }
            );
    }

    prepareData() {
        return {
            customer: {
                id: this.customer.id
            },
            productCode: this.obj.code,
            status: 'UNPAID',
            amount: this.amount
        };
    }
}
