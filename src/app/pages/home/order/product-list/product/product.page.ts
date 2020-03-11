import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'product-page',
    templateUrl: './product.page.html',
    styleUrls: ['./product.scss']
})

export class ProductPage implements OnInit {

    constructor(private route: ActivatedRoute,
                private http: HttpClient) {
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
        console.log(param)
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
}
