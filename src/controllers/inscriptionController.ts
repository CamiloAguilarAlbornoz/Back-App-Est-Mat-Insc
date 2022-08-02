import {Request, Response } from 'express';
import { registerPetitions } from './registerPetitionsControll';
import pool from '../database'

class InscriptionController {
    
    public list(req: Request, res: Response) {
        const inscripciones =  pool.query('select i.id_inscripcion, e.nombre, e.apellido, m.nombre_materia, i.estado_inscripcion from ESTUDIANTES e, MATERIAS m, INSCRIPCION_MATERIAS i WHERE e.id_estudiante = i.id_estudiante AND m.id_materia = i.id_materia', (err, results, fields) => {
            res.json(results);
            registerPetitions.create('GET: 200, Se obtuvieron las inscripciones');
        });
    }

    public getId(req: Request, res: Response){
        const inscripciones =  pool.query('select i.id_inscripcion, e.nombre, e.apellido, m.nombre_materia, i.estado_inscripcion from ESTUDIANTES e, MATERIAS m, INSCRIPCION_MATERIAS i WHERE e.id_estudiante = i.id_estudiante AND m.id_materia = i.id_materia AND i.id_inscripcion = ?',req.params.id, 
        (err, results, fields) => {
            res.json(results);
            registerPetitions.create('GET: 200, Se obtuvo una inscripcion por id'); 
        });
    }

    public create(req: Request, res: Response) {
        pool.query('INSERT INTO INSCRIPCION_MATERIAS set ?', [req.body], (err, results, fields) => {
            
        });
        registerPetitions.create('POST: 200, Se agrego una nueva inscripcion');
        res.json({text: 'Se agrego una nueva inscripcion'});
    }

    public delete(req: Request, res: Response) {
        res.json({text: 'Eliminado una materia ' + req.params.idm});
    }

    public update(req: Request, res: Response) {
        pool.query('UPDATE INSCRIPCION_MATERIAS set ? WHERE id_inscripcion = ?', [req.body, req.params.id], (err, results, fields) => {
            
        });
        registerPetitions.create('PUT: 200, Se actualizo la informacion de una inscripcion');
        res.json({text: 'Se actualizo la informacion de una inscripcion'});
    }

    public patch(req: Request, res: Response) {
        pool.query('UPDATE INSCRIPCION_MATERIAS set estado_inscripcion = ? WHERE id_inscripcion = ?', [req.body.estado_inscripcion, req.params.id], (err, results, fields) => {
            
        });
        registerPetitions.create('PATCH: 200, Se actualizo el estado de una inscipcion');
        res.json({text: 'Se actualizo el estado de una inscipcion'});
    }
} 

export const inscriptionController = new InscriptionController();