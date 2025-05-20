import { Component } from '@angular/core'
import { SIDEBAR_ITEMS } from './const/sidebar.const'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  public readonly SIDEBAR_ITENS = SIDEBAR_ITEMS
}
