import { Component, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  {

  themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
