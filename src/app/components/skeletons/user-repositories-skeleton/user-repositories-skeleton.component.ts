import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-repositories-skeleton',
  templateUrl: './user-repositories-skeleton.component.html',
  styleUrls: ['./user-repositories-skeleton.component.scss'],
})
export class UserRepositoriesSkeletonComponent {
  @Input() count: number = 10;

  constructor() {}

  getSkeletonCount(): any[] {
    return new Array(Math.min(10, this.count)).fill(0);
  }
}
