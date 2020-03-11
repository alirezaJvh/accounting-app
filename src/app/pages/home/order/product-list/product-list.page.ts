import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-product-list-page',
    templateUrl: './product-list.page.html',
    styleUrls: ['./product-list.page.scss']
})

export class ProductListPage implements OnInit{
    list = []
    ngOnInit(): void {
        this.list = JSON.parse(localStorage.getItem('product-list'));
        console.log(this.list);
    }
}
