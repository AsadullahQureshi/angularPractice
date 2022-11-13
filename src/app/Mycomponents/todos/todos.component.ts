import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() { 
    this.todos=[
      {
        sno:1,
        title:"Asad title 1",
        img:'https://avatars.githubusercontent.com/u/2918581?s=280&v=4',
        description: "loerncn jdhf dhfbdc  salman",
        active: true,

      },
      {
        sno:2,
        title:"Asad title 2",
        img:'https://getbootstrap.com/docs/5.2/assets/img/bootstrap-icons.png',
        description: "loerncn jdhf dhfbdc  salman",
        active: true,

      },
      {
        sno:3,
        img:'https://avatars.githubusercontent.com/u/2918581?s=280&v=4',
        
        title:"Asad title 3",
        description: "loerncn 3 jdhf dhfbdc  salman",
        active: true,

      },

    ]
  }

  ngOnInit(): void {
  }

}
