import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class MedicoComponent {

  private _medicoService = inject(MedicoService);
  medicosArray:any[] = [];


  saludarMedico(nombre: string) {
    return `Hola ${nombre}`
  }

  obtenerMedico(){
    this._medicoService.getMedico()
        .subscribe(
          (medicos: any) => this.medicosArray = medicos
        )
  }
}
