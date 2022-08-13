import {Request, Response } from 'express';
import pool from '../database'
import { registerPetitions } from './registerPetitionsControll';
class SubjectsController {
    
    public list(req: Request, res: Response) {
        const materias =  pool.query('select * from MATERIAS', (err, results, fields) => {
            res.json(results);
            registerPetitions.create('GET: 200, Se obtuvieron las materias');
        });
    }

    public listStudentsM(req: Request, res: Response) {
        const materias = pool.query('select * from ESTUDIANTES WHERE id_estudiante = ANY (SELECT id_estudiante from INSCRIPCION_MATERIAS WHERE id_materia = ?)', req.query.id, (err, results, fields) => {
            res.json(results);
        });
    }

    public getId(req: Request, res: Response){
        const materias =  pool.query('select * from MATERIAS where id_materia = ?',req.params.id, 
        (err, results, fields) => {
            res.json(results);
            registerPetitions.create('GET: 200, Se obtuvo una materia por id');
        });
    }

    public create(req: Request, res: Response) {
        pool.query('INSERT INTO MATERIAS set ?', [req.body], (err, results, fields) => {
            
        });
        registerPetitions.create('POST: 200, Se agrego una nueva materia');
        res.json({ text: 'Se guardo una materia' });
    }

    public delete(req: Request, res: Response) {
        res.json({text: 'Eliminado una materia ' + req.params.id});
    }

    public update(req: Request, res: Response) {
        const {id} = req.params;
        pool.query('UPDATE MATERIAS set ? WHERE id_materia = ?', [req.body, id], (err, results, fields) => {
            
        });
        registerPetitions.create('PUT: 200, Se actualizo la informacion de una materia');
        res.json({text: 'actualizando una materia '  + req.params.id});
    }

    public patch(req: Request, res: Response) {
        const {id} = req.params;
        pool.query('UPDATE MATERIAS set estado = ? WHERE id_materia = ?', [req.body.estado, id], (err, results, fields) => {
            
        });
        registerPetitions.create('PATCH: 200, Se actualizo el estado de una materia');
        res.json({text: 'actualizando cambiado el estado de una materia '  + req.params.id});
    }
} 

export const subjectsController = new SubjectsController();