import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-elderly-patient',
  templateUrl: './elderly-patient.component.html',
  styleUrls: ['./elderly-patient.component.css']
})
export class ElderlyPatientComponent implements OnInit {

  

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
  }}