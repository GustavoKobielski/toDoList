import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { SidebarComponent } from './shared/components/sidebar/sidebar.component'
import { HomeComponent } from './src/app/feature/todo/pages/home/home.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
