import { Component } from '@angular/core'
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {}
