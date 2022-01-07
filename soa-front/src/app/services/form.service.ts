import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Form } from '../Form';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
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
  
  addCreds(newCredentials: Form):Observable<Form> {
    return this.http.post<Form>(this.apiUrl, newCredentials,httpOptions)
  }
 
}


