
//sirve para agrupar pruebas
//describe('Pruebas de Strings');
//son las pruebas
//it('Debe regresar un string');
//it('Debe contener un nombre');

import { mensaje } from "./string"

xdescribe('Pruebas de string', () => {
    it('Debe de regresar un string', () => {
        const resp = mensaje('Fernando');

        //espera que la respuesta sea 
        //expect( (typeof resp) === 'string' )
        expect( typeof resp ).toBe('string')
    })
    it('Debe de retornar un saludo con el nombre enviado', () => {
        const nombre = 'Juan'
        const resp = mensaje(nombre);

        expect( resp ).toContain(nombre)
    })
})