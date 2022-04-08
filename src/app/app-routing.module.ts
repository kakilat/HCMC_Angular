import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElderlyPatientComponent } from './elderly-patient/elderly-patient.component';
import { HospitalInfoComponent } from './hospital-info/hospital-info.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';

const routes: Routes = [
{path: 'hospital-info', component:HospitalInfoComponent},
{path:'',redirectTo:'hospital-info',pathMatch:'full'},
{path: 'patient-info', component:PatientInfoComponent}
,{path: 'elderly-patient', component:ElderlyPatientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
