import { Component, Output, EventEmitter } from '@angular/core'
import { SearchInputComponent } from '../../../../shared/components/search-input/search-input.component'
import { VIEW_MODE } from '../../tasks.component'
import { KANBAN_ITEMS } from '../../const/tasks.const'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [SearchInputComponent, CommonModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css',
})
export class PageHeaderComponent {
  @Output() viewMode = new EventEmitter<VIEW_MODE>()
  ITENS_KANBAN = KANBAN_ITEMS
  selectedMode: VIEW_MODE = 'list'

  switchMode(mode: VIEW_MODE) {
    this.viewMode.emit(mode)
    this.selectedMode = mode
  }
}
