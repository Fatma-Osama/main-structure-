import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators , FormControl, ReactiveFormsModule, ValidationErrors} from '@angular/forms';
import { InputfieldComponent } from '../../Shared/inputfield/inputfield.component';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-form-module',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, InputfieldComponent, CheckboxModule  ],
  templateUrl: './form-module.component.html',
  styleUrl: './form-module.component.css'
})
export class FormModuleComponent implements OnInit {
isActive = []
pizza = []
grade = new FormControl('')
  model: any = {
   done: null,
  }
  todosList: any[]= []
  formModel!: FormGroup
  filesList : any[] = []
  formControl!: FormControl;
  formErrors : any = null;
  //set form contrl out of form
  name=  new FormControl('',[Validators.required, Validators.minLength(3)])


  uploadUrl = 'https://api.escuelajs.co/api/v1/files/'

  constructor( private fb : FormBuilder, private http: HttpClient){

  }
  ngOnInit(): void {
     this.formModel = this.fb.group({

      nameInput: ['', Validators.required],
      name: ['', Validators.required],
      File: ['', Validators.required],
      success: [ false ],
      isActive: [true],
      desc: ['', Validators.required],
      class: ['', Validators.required]
    })
  
  }

  checkInput($event: any){
    console.log($event.target.value);   // دايمًا "yes"

    console.log($event)
  }
  save(){
    
    console.log(this.grade , this.pizza, this.model, 'test', this.isActive)
    if(Object.keys(this.model).length < 4) return ;
     else { 
      this.todosList.push(this.model)
      this.model = {}

     }
     console.log(this.todosList)
  }

  saveForm(form : any){
    
    console.log(this.formModel.controls)
    console.log(this.formModel)
    console.log(this.name?.errors, 'test')
    // localStorage.setItem('name', 'fatma')
    localStorage['Name'] = 'fatma'
  this.formModel.markAllAsTouched(); // <=== مهم جدًا
    if(this.formModel.invalid) {
      this.formErrors = this.getAllErrors() 

      console.log(this.getAllErrors())
    }
    console.log(form, 'test')

  }


getAllErrors() {
  debugger; 
  console.log('1')
  const errors: any = {};
  const controls = this.formModel.controls;

  for (let key in controls) {
    console.log(key)
    if (controls[key].errors) {
      errors[key] = controls[key].errors;
    }
  }

  return errors;
}


  uploadFile(event :any){
    console.log(event.target.files)
    debugger;

    const file =new FormData()

    file.append('file',event.target.files[0])

    this.http.post(this.uploadUrl+'upload', file).subscribe({
      next: (res)=> {
        
        console.log(res)  
        this.filesList.push(res)
      }
    })
  }


}
