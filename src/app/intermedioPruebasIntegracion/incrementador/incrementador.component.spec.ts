import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [ IncrementadorComponent, FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        //hace referencia a las propiedades y metodos del componente
        component = fixture.componentInstance;

    });

    it('El componente debe ser creado', () => {

        expect(component).toBeTruthy();
    });
    it('Debe de mostrar la leyanda', () => {
        component.leyenda = 'Progreso de carga';

        fixture.autoDetectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3')).nativeElement

        expect( elem.innerHTML ).toContain( 'Progreso de carga')
    });
    it('Debe de mostrar en el input el valor del progreso', (done) => {
        component.cambiarValor(5);
        fixture.detectChanges();
        fixture.whenStable().then( () => {

            const input : HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
            console.log(input)

            expect( input.value ).toBe('55');
            done();
        } )
    });
    it('Debe incrementar/decrementar en 5, con un click en el botón ', () => {
        
        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        console.log(botones);
        botones[0].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(45);
        botones[1].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(50);
    } );

    it('El progreso debe cambiar al hacer click', ()=> {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        botones[0].triggerEventHandler('click', null);    

        fixture.detectChanges();


        const elem: HTMLElement = fixture.debugElement.query( By.css('h3')).nativeElement

        expect( elem.innerHTML ).toContain( '45')

    })

});
