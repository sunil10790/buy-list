import { Component } from '@angular/core';

@Component({
    selector: 'bl-products',
    templateUrl: 'app/products-list/products-list.component.html'
})
export class ProductsListComponent {
    pageTitle: string = 'Product List';
    products: any[] = [
        {
            "productId": 1,
            "productName": "Harley Davidson IRON 883",
            "description": "Aggressive throwback styling taken to a place altogether new. No need to shine this machine. Just get on and tear up the nearest street.",
            "price": 800000,
            "desperationLevel": 9.5,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Flute",
            "description": "Bansuri Flute",
            "price": 3000,
            "desperationLevel": 6,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ]
}