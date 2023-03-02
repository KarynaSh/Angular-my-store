import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent {

  constructor(){}

  @Input() product!: Product;
  @Output() notify = new EventEmitter();
}

//Декоратор @Input показывает, что значение свойства передается от родителя компонента.

