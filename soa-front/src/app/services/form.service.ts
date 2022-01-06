import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Form } from '../Form';
@Injectable({
  providedIn: 'root'
})



export class FormService {
  private apiUrl = 'http://localhost:5000/creds'
  
  constructor(private http:HttpClient) {
    
   }
  
  getData(): Observable<Form[]>{
    return this.http.get<Form[]>(this.apiUrl)
  }
}
