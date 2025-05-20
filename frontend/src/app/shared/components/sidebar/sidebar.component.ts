import { Component } from '@angular/core'
import { SIDEBAR_ITEMS } from './const/sidebar.const'
import { SearchInputComponent } from '../search-input/search-input.component'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SearchInputComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  public readonly SIDEBAR_ITENS = SIDEBAR_ITEMS
}
