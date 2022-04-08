import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';
 
;

@Injectable({
  providedIn: 'root'
})
export class PatientService {
private baseUrl="http://localhost:8080/patient"
  constructor(private httpClient:HttpClient) {

   }
   getPatientList(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl+"/all"}`);

  }


}
