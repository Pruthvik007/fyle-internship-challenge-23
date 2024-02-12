import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  @Input() onSubmit!: (username: string) => void;
  @Input() isDisabled!: boolean;
  username = '';
  error: string | null = null;
  constructor() {}

  validateUsername = () => {
    if (this.username.length === 0) {
      this.error = 'Username Cannot be Empty.';
    } else if (this.username.length < 3) {
      this.error = 'Username Must be Atleast 3 Characters Long.';
    } else {
      this.error = null;
    }
  };

  submit = () => {
    this.validateUsername();
    if (!this.error) {
      this.onSubmit(this.username);
    }
  };
}
