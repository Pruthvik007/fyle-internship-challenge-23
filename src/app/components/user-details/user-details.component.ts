import { Component, Input } from '@angular/core';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  @Input() user: User | undefined;
}
