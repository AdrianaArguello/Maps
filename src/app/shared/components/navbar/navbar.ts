import { Component, inject } from '@angular/core';
import { routes } from '../../../app.routes';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  router = inject(Router);

  routes = routes.map((route) => ({
    path: route.path,
    title: `${route.title ?? 'Angular Maps'}`
  })).filter((route) => route.path !== '**');

  pageTitle$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event) => event.url),
    map((url) => 
      routes.find((route) => `/${route.path}` === url)?.title ?? 'Angular Maps'
    )
  )
}
