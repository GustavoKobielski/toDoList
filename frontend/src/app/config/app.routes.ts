import { Routes } from '@angular/router'

import { RegisterComponent } from '../auth/register/register.component'

import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component'

import { HomeComponent } from '../pages/home/home.component'
import { LoginComponent } from '../auth/login/login.component'
import { TasksComponent } from '../pages/tasks/tasks.component'

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'tasks', component: TasksComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' },
]
