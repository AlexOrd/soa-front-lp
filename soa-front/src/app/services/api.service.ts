import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  getData(){
      return firstValueFrom(this.http.get('https://jsonplaceholder.typicode.com/todos'))
  }
}
