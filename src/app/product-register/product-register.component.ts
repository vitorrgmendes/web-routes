import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './product-register.component.html',
  styleUrl: './product-register.component.css'
})
export class ProductRegisterComponent {
  id = 0;
  name = '';
  price = 0;

  constructor(private productService: ProductService) { }

  registerProduct() {
    this.productService.postProduct({ id: this.id, name: this.name, price: this.price });
    this.name = '';
    this.price = 0;
  }
}
