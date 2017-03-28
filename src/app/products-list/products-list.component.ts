import { Component } from '@angular/core';

@Component({
    selector: 'bl-products',
    templateUrl: 'app/products-list/products-list.component.html',
    styleUrls: ['app/products-list/products-list.component.css']
})
export class ProductsListComponent {
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    products: any[] = [
        {
            "productId": 1,
            "productName": "Harley Davidson IRON 883",
            "description": "Aggressive throwback styling taken to a place altogether new. No need to shine this machine. Just get on and tear up the nearest street.",
            "price": 800000,
            "desperationLevel": 9.5,
            "imageUrl": "http://www.totalmotorcycle.com/motorcycles/2017/2017-Harley-Davidson-Iron-883d.jpg"
        },
        {
            "productId": 2,
            "productName": "Flute",
            "description": "Bansuri Flute",
            "price": 3000,
            "desperationLevel": 6,
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/31vAp3OoZ2L._SX300_.jpg"
        }
    ];

    toggleImage() : void {
        this.showImage = !this.showImage;
    };
}