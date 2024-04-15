import { MedicoComponent } from "../../intermedioPruebasIntegracion/medico/medico.component"
import { Rutas } from "./app.routes"

describe( 'Rutas Principales', () => {

    it( 'Debe de existir la ruta /medico/:id', () => {
        expect ( Rutas ).toContain({ path: 'medico/:id', component: MedicoComponent })
    } )
})