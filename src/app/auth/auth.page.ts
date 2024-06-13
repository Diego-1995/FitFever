import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'fit-auth',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <!-- Navbar Here!!! -->
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AuthPage {}
