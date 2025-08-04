import { Component, OnInit } from '@angular/core';
import { InputfieldComponent } from '../../Shared/inputfield/inputfield.component';
import { FormArray, FormControl, Validators, ReactiveFormsModule, FormGroup , FormBuilder} from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [ InputfieldComponent, ReactiveFormsModule, CheckboxModule],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent implements OnInit  {
  formGroup!: FormGroup;
  name = new FormControl("")
  done = new FormControl(false)
  status = new FormControl(false)
  desc = new FormControl("")
  mainForm! : FormGroup;

  constructor(private fb: FormBuilder){
  }
  ngOnInit(): void {
     this.formGroup = new FormGroup({
            city: new FormArray([])
        });


      this.mainForm = this.fb.group({
      opinion: ['', Validators.required],
      nameAr: ['', Validators.required],
      isActive: [false]


    })

  
  }
  save(){
    console.log(this.name, this.done, this.status, this.desc)
    console.log('formGroup', this.formGroup)
  }

  updateValue(event : any){

    console.log(event)

  }

}
