import {Request, Response } from 'express';
import pool from '../database'
import { registerPetitions } from './registerPetitionsControll';
class SubjectsController {
    
    public list(req: Request, res: Response) {
     const materias =  pool.query('select * from MATERIAS', (err, results, fields) => {
        //res.json(results);
        if (err) {
            res.status(400).json({
                status: 'error 400',
                message: err.message
            });
            registerPetitions.create('GET: error 400 '.concat(err.message));
        } else if (!results) {
            res.status(204).json({
                status: '204',
                result: 'No se encontró ningun registro que coincida con los parametros dados'
            });
            registerPetitions.create('GET: 204, No se encontró ningun registro que coincida con los parametros dados');
        } else {
            res.status(200).json({
                status: '200',
                result: results
            });
            registerPetitions.create('GET: 200, Se obtuvieron las materias');
        }
      });
    }

    public getId(req: Request, res: Response){
        const materias =  pool.query('select * from MATERIAS where id_materia = ?',req.params.id, 
        (err, results, fields) => {
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                registerPetitions.create('GET: error 400 '.concat(err.message));
            } else if (!results) {
                res.status(204).json({
                    status: '204',
                    result: 'No se encontró ningun registro que coincida con los parametros dados'
                });
                registerPetitions.create('GET: 204, No se encontró ningun registro que coincida con los parametros dados');
            } else {
                res.status(200).json({
                    status: '200',
                    result: results
                });
                registerPetitions.create('GET: 200, Se obtuvo una materia por id');
            }
          });
    }

    public create(req: Request, res: Response) {
        pool.query('INSERT INTO MATERIAS set ?', [req.body], (err, results, fields) => {
            if (err) {
            } else if (!results) {
                res.status(400).json({ 
                    status: 'error 400',
                    message: err
                });
                registerPetitions.create('POST: error 400');
            } else {
                res.status(200).json({
                    status: '200',
                    message: 'Se agrego una nueva materia'
                });
                registerPetitions.create('POST: 200, Se agrego una nueva materia');
            }
          });
        res.json({ text: 'Se guardo una materia' });
    }

    public delete(req: Request, res: Response) {
        res.json({text: 'Eliminado una materia ' + req.params.id});
    }

    public update(req: Request, res: Response) {
        const {id} = req.params;
        pool.query('UPDATE MATERIAS set ? WHERE id_materia = ?', [req.body, id], (err, results, fields) => {
            registerPetitions.create('PUT: 200, Se actualizo la informacion de una materia');
        });
        res.json({text: 'actualizando una materia '  + req.params.id});
    }

    public patch(req: Request, res: Response) {
        const {id} = req.params;
        pool.query('UPDATE MATERIAS set estado = ? WHERE id_materia = ?', [req.body.estado, id], (err, results, fields) => {
            registerPetitions.create('PATCH: 200, Se actualizo el estado de una materia');
        });
        res.json({text: 'actualizando cambiado el estado de una materia '  + req.params.id});
    }
} 

export const subjectsController = new SubjectsController();