import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private loadedFeature = 'recipes';
  constructor() {
  }

  onNavigate(navFeatures: string) {
    this.loadedFeature = navFeatures;
  }
}
