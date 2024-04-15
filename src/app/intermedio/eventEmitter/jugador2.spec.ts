import { Jugador2 } from "./jugador2"


xdescribe('Jugador 2 Emit', () => {
    let jugador: Jugador2;

    beforeEach( () => jugador = new Jugador2() );

    it( 'Debe de emitir un evento cuando recibe daño', () => {
        let nuevoHP = 0;
        jugador.hpCambia.subscribe( hp => {
            nuevoHP = hp;
        } );

        jugador.recibeDanno(1000);

        expect( nuevoHP ).toBe(0);
    } );
    it( 'Debe de emitir un evento cuando recibe daño y sobrevivir si en menos de 100', () => {

        let nuevoHP = 0;
        
        jugador.hpCambia.subscribe( hp => nuevoHP = hp);
        console.log('nuevoHP', nuevoHP);
        jugador.recibeDanno(50);
        console.log('nuevoHP', nuevoHP);
        

        expect( nuevoHP ).toBe(50);
    } )
})