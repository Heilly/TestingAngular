import { Jugador } from "./clases"


describe( 'Pruebas de clases', () => {

    let jugador = new Jugador;

    //beforeAll(); se ejecuta antes de iniciar las pruebas. Se ejecuta una vez.
    //beforeEach(); se ejecuta antes de cada prueba
    //afterAll();se ejecuta despues de cada prueba. Se ejecuta una vez.
    //afterEach(); se ejecuta cuando todas las pruebas finalizan
    
    beforeAll( () => {

    } );

    beforeEach( () => {
        //jugador.hp = 100;
        jugador = new Jugador();
    } );

    afterAll( () => {

    } );

    afterEach( () => {
        //jugador.hp = 100;
    } );

    
    it('Debe de retornar 80 de hp si recibe 20 de daño', () => {
        //const jugador = new Jugador;
        const resp = jugador.recibeDanno(20);

        expect(resp).toBe(80)
    }); 
    it('Debe de retornar 50 de hp si recibe 50 de daño', () => {
        //const jugador = new Jugador;
        const resp = jugador.recibeDanno(50);

        expect(resp).toBe(50)
    });
    it('Debe de retornar 0 de hp si recibe 100 o más de daño', () => {
        //const jugador = new Jugador;
        const resp = jugador.recibeDanno(140);

        expect(resp).toBe(0)
    });
} )