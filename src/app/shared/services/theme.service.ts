import { Injectable, Renderer2, RendererFactory2, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  // Use a signal to track the current theme
  currentTheme = signal<'light' | 'dark'>('dark');

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * Initializes the theme based on user's saved preference or defaults to dark.
   */
  initializeTheme() {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme('dark'); // Default theme
    }
  }

  /**
   * Toggles between light and dark themes.
   */
  toggleTheme() {
    const newTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  /**
   * Applies the selected theme to the body and saves it to localStorage.
   * @param theme The theme to set ('light' or 'dark').
   */
  private setTheme(theme: 'light' | 'dark') {
    this.currentTheme.set(theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      this.renderer.removeClass(document.body, 'light-theme');
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      this.renderer.addClass(document.body, 'light-theme');
    }
  }
}
