import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.scss'
})
export class UserViewComponent {

  user: any = undefined;

  constructor(private searchService: SearchService, private route: ActivatedRoute, private stateService: StateService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.searchService.getUser(params.get('username') || '').subscribe({
        next: ({ items }) => {
          this.user = items[0];
          console.log(this.user)
        },
        error: (err) => {
          this.stateService.onError(err.message);
          console.error(err);
        }
      });
    });
  }

}
