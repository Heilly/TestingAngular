import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from '../medico.service';
import { HttpClientModule } from '@angular/common/http';

xdescribe('MedicoComponent Pruebas de integración', () => {
  /**
   * fixture de tipo ComponentFixture<RegistroComponent> te permite acceder y manipular el componente RegistroComponent dentro de tus pruebas. Proporciona una serie de métodos y propiedades que te permiten interactuar con el componente, como:
  componentInstance: Proporciona acceso directo a la instancia del componente, lo que te permite acceder a sus propiedades y métodos.
  debugElement: Proporciona acceso al elemento raíz del componente en el DOM, lo que te permite realizar búsquedas y manipulaciones en el DOM relacionadas con el componente.
  detectChanges(): Método que detecta y aplica cambios al componente y su vista. Es útil cuando necesitas actualizar la vista después de realizar cambios en el estado del componente.
  triggerEventHandler(eventName: string, eventObj: any): Método que simula la activación de un evento en el componente. Puedes utilizarlo para simular interacciones del usuario, como hacer clic en un botón o enviar un formulario.
  nativeElement: Proporciona acceso al elemento DOM nativo del componente. Puedes utilizarlo para realizar manipulaciones directas en el DOM, si es necesario.
   */

  let component: MedicoComponent;
  let fixture : ComponentFixture<MedicoComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [ MedicoComponent, HttpClientModule ],
      providers: [ MedicoService ]
    });

    //Permite 
    fixture = TestBed.createComponent( MedicoComponent );
    //Crear la instancia del componente que permite acceder y manipular el mismo
    component = fixture.componentInstance;
  });

  it('Debe de crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de retornar el nombre del medico', () => {
    const nombre = 'Juan';
    const mensaje = component.saludarMedico(nombre);
    expect(mensaje).toContain(nombre);
  })
});
