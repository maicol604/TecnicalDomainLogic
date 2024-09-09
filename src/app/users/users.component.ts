import { Component } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users: any[] = [];

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.users$.subscribe(value => {
      this.users = value;
    });
  }

}

