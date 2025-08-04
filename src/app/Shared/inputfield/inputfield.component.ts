import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxModule } from "primeng/checkbox";

import { FormBuilder, FormControl, ReactiveFormsModule , AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-inputfield',
  standalone: true,
  imports: [ ReactiveFormsModule,  CommonModule, CheckboxModule],
  templateUrl: './inputfield.component.html',
  styleUrl: './inputfield.component.css'
})
export class InputfieldComponent implements OnInit{
// in case i use this input in form and i want to take his controlar from it (myform.get(control))
  @Input() control!: AbstractControl | null
  @Input() placeholder :string= '' 
  @Input() formControl!: FormControl;
  @Input() inputType: string = 'text';

  @Output() updateValue = new EventEmitter<any> ()

   initializeFormControl(): void {

    
    //AbstractControl is the parent that  support all types of controller but input support only form control so i recive any type of controler 
    // but to pass it to input take inly form control
    this.formControl = this.control as FormControl;
  }
  constructor(){

  }

  ngOnInit() {
    this.initializeFormControl()
     this.formControl?.valueChanges.subscribe(val => {
      console.log(val, 'emitval')
        this.updateValue.emit(val);
       });

  }

  updateInput($event: any){
    console.log(this.inputType)
    console.log($event.target?.checked, 'ppp')
    // this.updateValue.emit($event)
    if(this.inputType == 'checkbox' ) {
          this.updateValue.emit($event.target.checked)

    }

  }




}
