import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { CustomizationService } from '../../../core/services/customization.service'
import { MenubarModule } from 'primeng/menubar'
import { Component, OnInit, inject } from '@angular/core'
import { MenuItem } from 'primeng/api'



@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, RouterLink, MenubarModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {

    customizationService: CustomizationService = inject(CustomizationService)
    menuItems: MenuItem[] = []

    ngOnInit(): void {
        this.menuItems = this.customizationService.getMenuItems()
    }

}
