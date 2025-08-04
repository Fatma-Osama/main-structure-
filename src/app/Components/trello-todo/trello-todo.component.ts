import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { PostsService }  from '../../services/posts.service' ;
import { HttpClientModule } from '@angular/common/http';


import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

import { ReactiveFormsModule, FormGroup, FormBuilder, Validators,   FormControl } from '@angular/forms';


@Component({
  selector: 'app-trello-todo',
  standalone: true,
  imports: [
    CdkDrag,
    HttpClientModule,
    CdkDropList,
    MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './trello-todo.component.html',
  styleUrl: './trello-todo.component.css'
})
export class TrelloTodoComponent implements OnInit {
  trelloForm!: FormGroup;

  tasksCollection : any = { 
    tasks : [], 
    inprogressTasks : [], 
    doneTasks : [],
  }
  updatedTaskDetails: any = {
    taskIndex : null,
    ArrayName: null
  }
  formControl!: FormControl;
  enabledEdit: boolean = false
  constructor(private fb:FormBuilder, private PostsService: PostsService){


  }
  ngOnInit(): void {
    this.trelloForm = this.fb.group({
      title: ['', Validators.required]
    })
    this.loadAll()
    console.log(CdkDrag)


  }
  addTask(model: any){
    
    if(this.enabledEdit) {
      this.tasksCollection[this.updatedTaskDetails.ArrayName][this.updatedTaskDetails.taskIndex] = model
       this.updatedTaskDetails = {
        taskIndex : null,
        ArrayName: null
      }
    this.enabledEdit = false

    }
    else {
    this.PostsService.addTask('tasks', model).subscribe({
      next: (res)=> {
        console.log(res)
      }

     
    })

 

      this.tasksCollection.tasks.push(model)
    }
    this.trelloForm.reset()


  }

  deleteTask(index: any, arrayName: string){
    console.log(index)
    console.log(this.tasksCollection.tasks)

    // this?[arrayName][0] =
    this.tasksCollection[arrayName].splice(index, 1)
  }
  updateTask(index: any,item: any, arrayName: string){
    this.enabledEdit = true
    console.log(item.title)
    this.trelloForm.setValue({title: item.title}, item)
    this.updatedTaskDetails.ArrayName = arrayName
    this.updatedTaskDetails.taskIndex = index


  }

dragTracking(item: any){
  console.log(item)
  return 

}

  drop(event: CdkDragDrop<string[]>, listName: string){
    debugger ; 
    console.log( event.container.data, listName,  'check drop')
    console.log(event, listName,  'check drop')
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      
    }
  

    console.log(this.tasksCollection)
  }

  getTasks(){

  this.PostsService.getTasks('tasks').subscribe({
    next: (res)=> {
      console.log(res)
      this.tasksCollection.tasks = res
    }
     })

  }
  // getInprogressTasks(){

  // this.PostsService.get().subscribe({
  //   next: (res)=> {
  //     console.log(res)
  //     this.tasksCollection.tasks = res
  //   }
  //    })

  // }
  // getDoneTasks(){

  // this.PostsService.getPosts().subscribe({
  //   next: (res)=> {
  //     console.log(res)
  //     this.tasksCollection.tasks = res
  //   }
  //    })

  // }


  loadAll(){
    this.getTasks()
    
  }

 


}
