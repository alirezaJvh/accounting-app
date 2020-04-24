import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {CommonService} from '../../../../shared/common/common.service';


@Component({
    selector: 'sale-product-info',
    templateUrl: './product-info.page.html',
    styleUrls: ['./product-info.page.scss']
})

export class ProductInfoPage implements OnInit {
    product: object;
    size: object;
    constructor(private router: Router,
                private commonService: CommonService) {
    }

    ngOnInit(): void {
        this.getProduct();
    }

    getProduct() {
        if (localStorage.getItem('sale')) {
            const obj = JSON.parse(localStorage.getItem('sale'));
            this.product = obj.product;
            this.size = obj.size;
            // console.log(this.product);
        }
    }

    cancel() {
        this.router.navigate(['/home']);
        localStorage.removeItem('sale');
    }

    verification() {
        this.router.navigate(['/home/sale/product-info/customer']);
    }

}
