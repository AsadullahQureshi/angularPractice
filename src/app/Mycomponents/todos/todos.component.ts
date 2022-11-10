import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] | undefined;

  constructor() { 
    this.todos=[
      {
        sno:1,
        title:"Asad title 1",
        description: "loerncn jdhf dhfbdc  salman",
        active: true,

      },
      {
        sno:2,
        title:"Asad title 2",
        description: "loerncn jdhf dhfbdc  salman",
        active: true,

      },
      {
        sno:3,
        title:"Asad title 3",
        description: "loerncn 3 jdhf dhfbdc  salman",
        active: true,

      },

    ]
  }

  ngOnInit(): void {
  }

}
