import { Component, Input } from '@angular/core';
import { Repository } from 'src/app/types/Repository';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.scss'],
})
export class UserRepositoriesComponent {
  @Input() repositories: Repository[] | undefined;
}
