import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'candy-shop';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        switch (event.urlAfterRedirects) {
          case '/home':
            this.title = 'Home - Candy Shop';
            break;
          case '/cart':
            this.title = 'Shopping Cart - Candy Shop';
            break;
          case '/list':
            this.title = 'Product List - Candy Shop';
            break;
          case '/details':
            this.title = 'Product Details - Candy Shop';
            break;
          default:
            this.title = 'Candy Shop';
            break;
        }
      });
  }
}
