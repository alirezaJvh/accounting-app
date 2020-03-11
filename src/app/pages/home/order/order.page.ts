import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'order-page',
    templateUrl: './order.page.html',
    styleUrls: ['./order.page.scss', '../../../../assets/style/page-style.scss']
})

export class OrderPage {
    constructor(public modalController: ModalController) {
    }

    async presentCodeModal() {
        const modal = await this.modalController.create({
            component: CodeModalPage,
        })
        return await modal.present();
    }

   /* dismissModal() {
        this.modalController.dismiss({
            dismissed: true
        });
    }*/
}

@Component({
    selector: 'code-modal-page',
    templateUrl: './modal/code-modal.html'
})

export class CodeModalPage {
   constructor(public modalCntr: ModalController){}
     dismissModal() {
         this.modalCntr.dismiss();
    }
}
