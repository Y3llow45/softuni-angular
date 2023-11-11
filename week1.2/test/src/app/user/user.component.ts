import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input('info') user?: { name: string, age: number };
  @Output() delete: EventEmitter<any> = new EventEmitter();
  constructor() {
    console.log('constructor')
  }
  ngOnInit() {
    console.log('All inputs have been set!')
    console.log(this.user)
  }
  deleteHandler() {
    console.log('delete')
  }

}
