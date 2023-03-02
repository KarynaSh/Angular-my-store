import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: Product) {
    this.items.push(product);
  }
  //addToCart() - добавляет продукт в массив items.

  getItem() {
    return this.items;
  }
  //getItems() - собирает товары, которые пользователи добавляют в корзину, и возвращает каждый товар с соответствующим количеством .

  clearCart() {
    this.items = [];
    return this.items;
  }
  //clearCart() - возвращает пустой массив товаров, который очищает корзину.

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  //Получение данные о доставке из shipping.json.
}
