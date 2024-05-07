import { Injectable, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Injectable({
  providedIn: 'root'
})
export class CustomizationService {

  menuItems: MenuItem[] = []

  constructor() {
    this.setMenuItems()
  }


  getMenuItems(): MenuItem[] {
    return this.menuItems

  }

  setMenuItems(): void {
    this.menuItems = [
      {
        routerLink: '',
        label: 'home',
        icon: 'home',
      },
      {
        routerLink: 'skills',
        label: 'skills',
        icon: '',
      },
      {
        routerLink: 'experience',
        label: 'experience',
        icon: '',
      },
      {
        routerLink: 'projects',
        label: 'projects',
        icon: '',
      },
      {
        routerLink: 'contact',
        label: 'contact',
        icon: '',
      }
    ]
  }
}
