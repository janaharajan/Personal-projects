import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    const hamburgerIcon: HTMLElement | null = document.querySelector(".hamburger-icon");
    const navigationMenu: HTMLElement | null = document.querySelector(".navigation-menu-ul ul");

    if (hamburgerIcon && navigationMenu) {
      hamburgerIcon.addEventListener("click", () => {
        if (navigationMenu.style.display === "flex") {
          navigationMenu.style.display = "none";
        } else {
          navigationMenu.style.display = "flex";
        }
      });
    }
  }
}

