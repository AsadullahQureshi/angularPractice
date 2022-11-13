import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { NavbarComponent } from './Mycomponents/navbar/navbar.component';
import { FooterComponent } from './Mycomponents/footer/footer.component';
import { TodosItemComponent } from './Mycomponents/todos-item/todos-item.component';
import { AddTodoComponent } from './Mycomponents/add-todo/add-todo.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NavbarComponent,
    FooterComponent,
    TodosItemComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
