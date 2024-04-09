import { obtenerRobots } from "./arreglos";


describe('Pruebas de arreglos', () => {
    it('debe retornar al menos 3 robots', () => {
        const res = obtenerRobots();

        expect(res.length).toBe(3);
        //Mayor o igual a 3
        expect(res.length).toBeGreaterThanOrEqual(3);
    });
    it('Debe existir MegaMan y Ultron', () => {
        const res = obtenerRobots();
        expect( res ).toContain('MegaMan');
        expect( res ).toContain('Robocop');
    })
    
})