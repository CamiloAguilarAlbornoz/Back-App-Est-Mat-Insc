import { registerPetitions } from './registerPetitionsControll';
import { Request, Response } from 'express';

import pool from '../database'
class StudentsController {

    public list(req: Request, res: Response) {
        const estudiantes = pool.query('select * from ESTUDIANTES', function (err, results, fields) {
            res.json(results);
            registerPetitions.create('GET: 200, Se obtuvieron los estudiantes');
        });

    }

    public getId(req: Request, res: Response) {
        const estudiantes = pool.query('select * from ESTUDIANTES where id_estudiante = ?', req.params.id, function (err, results, fields) {
            res.json(results);
            registerPetitions.create('GET: 200, Se obtuvo un estudiante por id');
        });
    }

    public getByCode(req: Request, res: Response) {
        const estudiantes = pool.query('select * from ESTUDIANTES where codigo = ?', req.params.id, function (err, results, fields) {
            res.json(results);
            registerPetitions.create('GET: 200, Se obtuvo un estudiante por codigo');
        });
    }

    public getDocument(req: Request, res: Response) {
        const estudiantes = pool.query('select * from ESTUDIANTES where numero_documento = ?', req.params.id, function (err, results, fields) {
            res.json(results);
            registerPetitions.create('GET: 200, Se obtuvo un estudiante por documento');
        });
    }

    public async create(req: Request, res: Response) {
        pool.query('INSERT INTO ESTUDIANTES set ?', [req.body], function (err, results, fields) {
            
        });
        registerPetitions.create('POST: 200, Se agrego un nuevo estudiante');
        res.json({ text: 'Se guardo un estudiante' });
    }

    public delete(req: Request, res: Response) {
        res.json({ text: 'Eliminado un estudiante ' + req.params.id });
    }

    public updateStudent(req: Request, res: Response) {
        const { id } = req.params;
        pool.query('UPDATE ESTUDIANTES set ? WHERE id_estudiante = ?', [req.body, id], (err, results, fields) => {
            
        });
        registerPetitions.create('PUT: 200, Se actualizo la informacion de un estudiante');
        res.json({ text: 'Se actualizo la informacion de un estudiante' });
    }

    public setState(req: Request, res: Response) {
        const { id } = req.params;
        pool.query('UPDATE ESTUDIANTES set estado = ? WHERE id_estudiante = ?', [req.body.estado, id], (err, results, fields) => {
            
        });
        registerPetitions.create('PATCH: 200, Se actualizo el estado de un estudiante');
        res.json({ text: 'Se actualizo el estado de un estudiante' });
    }
}



export const studentsController = new StudentsController();