import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  title:string = 'hello angular';
  imgLink:string= 'https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg';
  tasks :string[]= [];
  newTask :string= '';
  isAvailable :boolean= false;
  addTasks(){
    console.log(this.newTask, 'jkhbgf')
    if( this.newTask.trim() != ""){
      this.tasks.push(this.newTask)
      console.log(this.tasks)
      this.newTask = '';
      this.isAvailable = true

    }
  };
  remove(i :number){
    console.log(i)
    this.tasks.splice(i, 1)
  }
  edit(i: number, editableTask: string) :string | void {
    console.log(editableTask)
    if(editableTask !== ''){
      this.tasks[i] = editableTask.trim()
      this.newTask = ''
    } else {
      editableTask = this.tasks[i]
      console.log(this.tasks[i], editableTask)
     return this.newTask = editableTask

    }
    // let updateTask = prompt('edit task', this.tasks[i])
    // if(updateTask !== null) {
    //   this.tasks[i] = updateTask.trim()
    // }



  };


  // Title:string = "To Do List Application";
  // imageLink:string= "https://cdn-icons-png.flaticon.com/512/4697/4697260.png";

  // tasks : string[] =[];
  // newTask : string="";
  // isAvalible : boolean = false;
  // addTask()
  // {
  //   if(this.newTask.trim() !=="")
  //   {
  //     this.tasks.push(this.newTask);
  //     this.newTask="";
  //     this.isAvalible = true;
  //   }

  // }
  // RemoveTask(index :number)
  // {
  //   this.tasks.splice(index,1);
  //   this.isAvalible = this.tasks.length > 0;
  // }
  // // EditTask(index :number)
  // // {
  // //   let updateTask = prompt("Edit Task",this.tasks[index]);
  // //   if(updateTask !==null)
  // //   {
  // //     this.tasks[index] = updateTask.trim();
  // //   }
  // // }
  // EditTask(index:number, newtaskEdit:string) : string | void
  // {
  //   const trimedTask = newtaskEdit.trim();
  //   if(newtaskEdit.trim() !== "")
  //   {
  //     this.tasks[index] = trimedTask;
  //   }
  //   else
  //   {
  //     newtaskEdit = this.tasks[index];
  //     return this.newTask = newtaskEdit;
  //   }
  //   this.newTask ="";
  // }
}
