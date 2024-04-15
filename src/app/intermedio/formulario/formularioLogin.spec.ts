import { FormBuilder } from "@angular/forms";
import { FormularioRegister } from "./formularioLogin"


xdescribe('Formularios', () => {
    let componente: FormularioRegister;


    beforeEach( () => {
        componente = new FormularioRegister( new FormBuilder ); // al crear una nueva instancia de Formulrio register, pide que inicialice todas las instancias del constructor
    } );

    it( 'Debe de crear un formulario con dos campos, email y pasword', () => {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    } );
    it('Email debe ser obligatorio', () => {
        const control = componente.form.get('email');

        control?.setValue('');
        expect(control?.valid).toBeFalsy();
    });
    it('Email debe ser un correo válido', () => {
        const control = componente.form.get('email');

        control?.setValue('asd@fgh.com');
        expect(control?.valid).toBeTruthy();
    })

})