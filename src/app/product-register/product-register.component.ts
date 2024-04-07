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
  errorMessage = '';
  successMessage = '';

  constructor(private productService: ProductService) { }

  registerProduct() 
  {
    if (!this.validateProduct()) 
    {
      return;
    }

    this.productService.postProduct({ id: this.id, nome: this.name, preco: this.price }).subscribe({
      next: () => {
        this.clearFields()
        this.successMessage = 'Product successfully created!';
      },
      error: (error) => {
        this.clearFields()
        this.errorMessage = 'Failed to register product! (Server Error)';
      }
    });
  }

  // Validation Method
  validateProduct(): boolean 
  {
    // Validate the name
    if (!this.name.trim()) {
      this.errorMessage = 'Name must be informed!';
      return false;
    }
  
    // Validate the price
    if (this.price <= 0) {
      this.errorMessage = 'The price must be more than 0!';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  clearFields() 
  {
    this.name = '';
    this.price = 0;
    this.errorMessage = '';
    this.successMessage = '';
  }
}

