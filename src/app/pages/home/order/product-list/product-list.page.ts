import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-product-list-page',
    templateUrl: './product-list.page.html',
    styleUrls: ['./product-list.page.scss']
})

export class ProductListPage implements OnInit {
    constructor(private router: Router) {
    }

    list = [];

    ngOnInit(): void {
        this.list = JSON.parse(localStorage.getItem('product-list'));
        console.log(this.list);
    }

    getProduct(id) {
        for (const item of this.list) {
            if (item.id === id) {
                return item
            }
        }
    }

    routeToProduct(id) {
        const obj = this.getProduct(id);
        localStorage.setItem('product', JSON.stringify(obj));
        this.router.navigate(['/home/order/product-list/product']);
        console.log(id);
        console.log(obj)
    }
}
