import { HttpClient } from '@angular/common/http';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, of, throwError } from 'rxjs';


describe('MedicosComponent', () => {

    /**
     * jasmine.createSpyObj: Es una función proporcionada por Jasmine para crear un objeto espía con varios métodos simulados.
     * 'HttpClient': Es el nombre del objeto que se está simulando. En este caso, está creando un objeto espía para el servicio HttpClient.
     * { get: of({}) }: Este es un objeto que especifica qué métodos del objeto espía se deben simular y qué valores deben devolver cuando se llamen esos métodos. En este caso, estás diciendo que el método get debe ser simulado y que cuando se llame, debe devolver un observable que emite un objeto vacío {}. of({}) es un operador de RxJS que crea un observable que emite un solo valor y luego se completa.
     */
    
    let componente: MedicosComponent;
    const servicio = new MedicosService( null as any  );

    beforeEach( () => {
        componente = new MedicosComponent( servicio  )
    });

    //Confirmar que se cargo
    it('Init: Debe de cargar los medicos', () => {
       
        const medicos = ['medico1', 'medico1', 'medico1',]
        //Hacer peticiones falsas
        //espia el servicio, y cuando alguien llame a getMedicos ejecuta lo siguiente
        spyOn( servicio, 'getMedicos' ).and.callFake( () => {
            return from( [ medicos ] )
        } )

        componente.ngOnInit();

        expect( componente.medicos.length ).toBeGreaterThan(0);
   
    });

    //Confirmar que un metodo se llamo
    it('Debe de llamar al servidor para agregar un metodo', () => {

        
        const espia = spyOn( servicio, 'agregarMedico' ).and.callFake( medico => {
            return of({});
        } )
        componente.agregarMedico();
        //Espera que espia sea llamado
        expect( espia ).toHaveBeenCalled();
    });

    it( 'Debe de agregar un nuevo medico al arreglo de medicos', () => {

        const medico = { id: 1, nombre: 'Juan' };

        spyOn( servicio, 'agregarMedico' )
                .and.returnValue( from( [ medico ] ) );
        
        componente.agregarMedico();

        expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0)
        //expect( componente.medicos.length ).toBe(1)
    } );

    it('Si falla la adicion del medico, la propiedad mensajeError, debe ser igual al error del servicio', () => {
        const miError = 'No se pudo agregar el medico';

        spyOn( servicio, 'agregarMedico' )
                .and.returnValue( throwError(miError) );
        componente.agregarMedico();

        expect(componente.mensajeError).toBe( miError )
    });

    //Saber si se llamo el metodo borrar
    it('Debe de llamar al servidor para borrar a un medico', () => {

        //para ejecutar clic en un boton
        spyOn( window, 'confirm').and.returnValue(true);

        const id = '11'
        //Llamamos al espia para asegur que el metodo a sido llamado
        const espia = spyOn( servicio, 'borrarMedico' ).and.callFake( idMedico => {
            return of({});
        } );

        componente.borrarMedico( id );
        //se espera que sea llamado con ... el argumento id
        expect( espia).toHaveBeenCalledWith( id );
    })



});
