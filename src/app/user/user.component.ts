import { Component, EventEmitter, Input, Output, computed } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) uid!: string;
  // @Input({required: true}) name!: string;
  // @Input({required: true}) avatar!: string;
  @Input({required: true}) user!: User;
  @Input({required: true}) isSelected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
