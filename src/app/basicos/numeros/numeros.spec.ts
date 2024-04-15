import { incrementar } from "./numeros"


xdescribe ( 'Prueba de number', () => {
    it( 'Debe regresar un numero', () => {
        const resp = incrementar(97);
        expect ( typeof resp ).toBe('number');
    } );
    it('Debe retornar 100, si el numero es mayor que 100', () => {
        const resp = incrementar(300);
        expect( resp ).toBe(100)
    });
    it('Debe retornar el numero +1 si es inferior a 100', () => {
        const resp = incrementar(50);
        expect( resp ).toBe(51);
    })
} )