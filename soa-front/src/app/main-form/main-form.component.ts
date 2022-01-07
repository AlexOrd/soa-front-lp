import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  
 customerForm = this.fb.group({
    name:  ['', Validators.required,  Validators.minLength(3)],
    email: ['', Validators.required,
                Validators.minLength(4), 
                Validators.email,
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
    phone: ['', Validators.minLength(10),
                ],
    
  });
  
  ngOnInit(): void {
   
  }
  
 
  constructor(private fb: FormBuilder) { }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.customerForm.value);
    if (this.customerForm.invalid) {
      return;
  }
  }
  
  }
