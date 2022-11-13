import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title:string |undefined;
  description:string| undefined;
  img:string|undefined;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){

  }

}
