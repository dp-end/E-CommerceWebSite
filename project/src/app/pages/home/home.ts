import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  sampleProducts = [
    { name: 'Akıllı Telefon', price: 12500 },
    { name: 'Kablosuz Kulaklık', price: 2100 },
    { name: 'Dizüstü Bilgisayar', price: 35000 },
    { name: 'Akıllı Saat', price: 4500 }
  ];
}
