import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListViewComponent } from './list-view/list-view.component'
import { KanbanViewComponent } from './kanban-view/kanban-view.component'
import { PageHeaderComponent } from './components/page-header/page-header.component'

export type VIEW_MODE = 'list' | 'kanban'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    ListViewComponent,
    KanbanViewComponent,
    PageHeaderComponent,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  viewMode!: VIEW_MODE

  onViewModeChange(mode: VIEW_MODE) {
    this.viewMode = mode
  }
}
