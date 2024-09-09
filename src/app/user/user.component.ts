import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user: any;

  constructor(private router: Router) {}

  goTo() {
    this.router.navigate(['/user', this.user.login]);
  }

}
