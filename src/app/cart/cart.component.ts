import { Component } from '@angular/core';
import { CartService } from '../cart.service';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartServise.getItem();
  //items - свойство для хранения продуктов в корзине.

  checkoutForm = this.formBuilder.group({
    name: '',
    address:''
  });
  //Форма для имени и адреса пользователя.

  constructor(
    private cartServise: CartService,
    private formBuilder: FormBuilder,
  ) { }
  
  onSubmit(): void {
    this.items = this.cartServise.clearCart();
    console. warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  //onSubmit() - метод для обработки формы
  
}
