import { Component } from '@angular/core'
import { SearchInputComponent } from '../../shared/components/search-input/search-input.component'
import { KANBAN_ITEMS } from './const/tasks.const'
import { CommonModule } from '@angular/common'
import { ListViewComponent } from './list-view/list-view.component'
import { KanbanViewComponent } from './kanban-view/kanban-view.component'

export type VIEW_MODE = 'list' | 'kanban'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    SearchInputComponent,
    CommonModule,
    ListViewComponent,
    KanbanViewComponent,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  viewMode: VIEW_MODE = 'list'
  ITENS_KANBAN = KANBAN_ITEMS
  selectedMode: VIEW_MODE = 'list'

  switchMode(mode: VIEW_MODE) {
    this.viewMode = mode
    this.selectedMode = mode
  }
}
