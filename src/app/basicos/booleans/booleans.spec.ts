import { usuarioRegistrado } from "./booleans"


describe('Prueba de booleans', () => {
    it('Debe de regresar true', () => {
        const resp = usuarioRegistrado();
        expect(resp).toBeTrue();
        expect(resp).toBeTruthy();
        expect(resp).not.toBeFalsy();
    }) 
})