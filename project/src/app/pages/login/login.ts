import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  // Sayfa yüklendiğinde form direkt görünsün
  isFormVisible: boolean = true;

  credentials = { username: '', password: '' };

  constructor(private router: Router) {}

  onLogin() {
    const user = this.credentials.username.toLowerCase();
    if (user === 'admin') {
      this.router.navigate(['/admin']);
    } else if (user === 'corporate') {
      this.router.navigate(['/corporate']);
    } else {
      this.router.navigate(['/individual']);
    }
  }
}
