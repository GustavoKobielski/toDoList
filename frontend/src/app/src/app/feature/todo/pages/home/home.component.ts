import { Component } from '@angular/core'
import { TITLE_PAGE } from '../../../../../../shared/const/title.const'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent {
   public readonly title = TITLE_PAGE
}
