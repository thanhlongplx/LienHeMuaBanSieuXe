import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brandbody',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './brandbody.component.html',
  styleUrls: ['./brandbody.component.css']
})
export class BrandbodyComponent {
  searchTerm: string = '';
  selectedCategory: string = '';
  filteredItems: any[] = [];
  basket: any[] = [];
  cartSummary: any[] = [];
  successMessage: string = ''; // Biến để lưu thông báo thành công

  carLs = [
    { name: 'Lamborghini', image: 'img/Lamborghini Bright-Blue.jpg', price: '25B' },
    { name: 'Lamborghini', image: 'img/Lamborghini Black-2019.png', price: '25B' },
    { name: 'Lamborghini', image: 'img/Lamborghini--Veneno.jpg', price: '25B' },
    { name: 'Lamborghini', image: 'img/Lamborghini-Aventador-libe-rty.jpg', price: '25B' },
    { name: 'Lamborghini', image: 'img/Lamborghini-Portada.jpg', price: '25B' },
  ];

  carAus = [
    { name: 'Audi', image: 'img/Audi-R8-V10.png', price: '25B' },
    { name: 'Audi', image: 'img/Audi-R7-2020.jpg', price: '25B' },
    { name: 'Audi', image: 'img/Audi-tt-25-anos.jpg', price: '25B' },
    { name: 'Audi', image: 'img/Audi-RS5-Grey-2.jpg', price: '25B' },
    { name: 'Audi', image: 'img/Audi—R8-52-Quattro.jpg', price: '25B' },
    { name: 'Audi', image: 'img/Audi-SQ8.jpg', price: '25B' },
    { name: 'Bentley', image: 'img/bentley-bentayga.jpg', price: '25B' },
  ];

  constructor() {
    this.updateFilteredItems();
  }

  getItemsByCategory() {
    switch (this.selectedCategory) {
      case 'Lamborghini':
        return this.carLs;
      case 'Audi':
        return this.carAus;
      default:
        return [...this.carLs, ...this.carAus]; // Trả về tất cả sản phẩm
    }
  }

  updateFilteredItems() {
    const itemsToFilter = this.getItemsByCategory();
    this.filteredItems = this.searchTerm.trim()
      ? itemsToFilter.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      : itemsToFilter;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.updateFilteredItems();
  }

  

  updateCartSummary() {
    this.cartSummary = [];
    this.basket.forEach(product => {
      const existingProduct = this.cartSummary.find(item => item.name === product.name);
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice += parseFloat(product.price);
      } else {
        this.cartSummary.push({ ...product, quantity: 1, totalPrice: parseFloat(product.price) });
      }
    });
  }

  openCart() {
    // Logic để mở giỏ hàng
  }
}