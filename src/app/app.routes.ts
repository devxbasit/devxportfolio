import { Routes } from '@angular/router'
import { HomeComponent } from './features/home/home.component'
import { MaintenanceGuard } from './core/guards/maintenance/maintenance.guard'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [MaintenanceGuard],
    },
    {
        path: 'skills',
        loadComponent: () => import("./features/skills/skills.component").then(c => c.SkillsComponent),
        canActivate: [MaintenanceGuard],
    },
    {
        path: 'experience',
        loadComponent: () => import("./features/experience/experience.component").then(c => c.ExperienceComponent),
        canActivate: [MaintenanceGuard],
    },
    {
        path: 'projects',
        loadComponent: () => import("./features/projects/projects.component").then(c => c.ProjectsComponent),
        canActivate: [MaintenanceGuard],
    },
    {
        path: 'contact',
        loadComponent: () => import("./features/contact/contact.component").then(c => c.ContactComponent),
        canActivate: [MaintenanceGuard],
    },
    {
        path: 'maintenance',
        loadComponent: () => import("./features/maintenance/maintenance.component").then(c => c.MaintenanceComponent),
    },
    {
        path: 'error',
        loadComponent: () => import("./features/error/error.component").then(c => c.ErrorComponent),
        canActivate: [MaintenanceGuard],
    },
    {
        path: '**',
        redirectTo: 'error',
    }

    // Todo - to be done later
    // {
    //     path: 'blog',
    //     loadComponent: () => import("./features/blog/blog-dashboard/blog-dashboard.component").then(c => c.BlogDashboardComponent),
    //     canActivate: [MaintenanceGuard],
    // },
    // {
    //     path: 'login',
    //     loadComponent: () => import("./features/auth/login/login.component").then(c => c.LoginComponent),
    //     canActivate: [MaintenanceGuard],
    // },
]
