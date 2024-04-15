import { Routes } from '@angular/router';
import { HospitalComponent } from '../../intermedioPruebasIntegracion/hospital/hospital.component';
import { MedicoComponent } from '../../intermedioPruebasIntegracion/medico/medico.component';
import { IncrementadorComponent } from '../../intermedioPruebasIntegracion/incrementador/incrementador.component';

export const Rutas: Routes = [
    { path: 'hospital', component: HospitalComponent},
    { path: 'medico/:id', component: MedicoComponent },
    { path: '**', component: IncrementadorComponent },
]