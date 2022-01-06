import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  name: string = '';
  email: string = '';
  phone: number = NaN;
  
  constructor(private api: ApiService) { 
    
  }

  ngOnInit(): void {
    this.api.getData()
  }
  onSubmit(){
    if(!this.name) {
      alert('Please add a name!')
      return;
    } else if (this.name.length < 3){
      alert('Name should have at least 3 characters!')
    } else if (this.name == '' || this.email == '' || this.phone == NaN){
      alert('Please fill all the fields!')
    }
    
    const newCredentials = {
      name: this.name,
      email: this.email,
      phone: this.phone
      
    }
    
    this.name = '';
    this.email = '';
    this.phone = NaN;
  }
}
