import pool from '../database'

class RegisterPetitionsController {

    public create(estado : any) {
        pool.query(`INSERT INTO REGISTROS_PETICIONES (estado, descripcion) VALUES ('${estado}','Captado en el servidor 2');`);
    }
}
export const registerPetitions = new RegisterPetitionsController();