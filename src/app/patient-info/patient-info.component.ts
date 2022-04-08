import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
no: number;
patients:Patient[];
  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    this.getPatientList();
    
  }
  private getPatientList(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
      
    })
  }

}
