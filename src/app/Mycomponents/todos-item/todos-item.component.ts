import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {

  constructor() { }
  @Input() todos!: Todo;

  ngOnInit(): void {
  }

}
