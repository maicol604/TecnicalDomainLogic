import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchInput: string = '';

  constructor(private searchService: SearchService, private stateService: StateService) { }

  search() {
    if(this.searchInput.length<4 || this.searchInput.length>=20) {
      this.stateService.onSearchError("The input must be between 4 and 20 characters long.");
      return;
    }
    this.stateService.onSearchError("");
    this.stateService.onError("");
    this.searchService.getUsers(this.searchInput).subscribe({
      next: ({ items }) => {
        this.stateService.updateUsers(items)
      },
      error: (err) => {
        this.stateService.onError(err.message);
        console.error(err);
      }
    });
  }

}
