import { Component, EventEmitter, Input, Output, computed } from '@angular/core';

type User = {
  id: string,
  name: string,
  avatar: string
}

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
  @Input({required: true}) user!: User
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
