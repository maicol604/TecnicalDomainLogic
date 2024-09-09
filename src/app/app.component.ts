import { Component } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  alert: string = '';
  error: string = '';
  title = 'TecnicalDomainLogic';

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.warn$.subscribe(value => {
      this.alert = value;
    });
    this.stateService.error$.subscribe(value => {
      this.error = value;
    });
  }

}
