import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  credentials = {username : '' , password: ''};

  constructor(private router: Router) {}
  onLogin(){
    const role = this.getMockRole(this.credentials.username)
    if(role == 'ADMIN'){
      this.router.navigate(['/admin']);
    }else if(role == 'CORPORATE') {
      this.router.navigate(['/corporate']);
    }else{
      this.router.navigate(['individual']);
    }
  }

  getMockRole(user: string){
    if(user.includes('admin')) return 'ADMIN';
    if(user.includes('shop')) return 'CORPORATE';
    return 'INDIVIDUAL';
  }
}
