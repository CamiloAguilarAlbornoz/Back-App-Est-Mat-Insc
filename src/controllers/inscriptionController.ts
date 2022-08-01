import {Request, Response } from 'express';
import { registerPetitions } from './registerPetitionsControll';
import pool from '../database'

class InscriptionController {
    
    public list(req: Request, res: Response) {
     const inscripciones =  pool.query('select * from INSCRIPCION_MATERIAS', (err, results, fields) => {
        res.json(results);
        console.log(err);
        registerPetitions.create('GET: 200, Se obtuvieron las inscripciones');
      });
    }

    public getId(req: Request, res: Response){
        const inscripciones =  pool.query('select * from INSCRIPCION_MATERIAS where id_materia = ? and id_estudiante = ?',[req.params.idm, req.params.ide], 
        (err, results, fields) => {
            console.log(err);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                registerPetitions.create('GET: error 400 '.concat(err.message));
                return;
            } else if(!results){
                res.status(204).json({
                    status: '204',
                    result: 'No se encontró ningun registro que coincida con los parametros dados'
                });
                registerPetitions.create('GET: 204, No se encontró ningun registro que coincida con los parametros dados');
            }else {
                res.status(200).json({
                    status: '200',
                    result: results
                });
                registerPetitions.create('GET: 200, Se obtuvo una inscripcion por id');
            }
          });
    }

    public create(req: Request, res: Response) {
        pool.query('INSERT INTO INSCRIPCION_MATERIAS set ?', [req.body], (err, results, fields) => {
            console.log(err);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                registerPetitions.create('POST: error 400');
                return;
            } else {
                res.status(200).json({
                    status: '200',
                    message: 'Se realizó la inscripcion de materia'
                });
                registerPetitions.create('POST: 200, Se agrego una nueva inscripcion');
            }
          });
        
    }

    public delete(req: Request, res: Response) {
        res.json({text: 'Eliminado una materia ' + req.params.idm});
    }

    public update(req: Request, res: Response) {
        pool.query('UPDATE INSCRIPCION_MATERIAS set ? WHERE id_materia = ? AND id_estudiante = ?', [req.body, req.params.idm, req.params.ide], (err, results, fields) => {
            console.log(err);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                registerPetitions.create('PUT: error 400');
                return;
            } else {
                res.status(200).json({
                    status: '200',
                    message: 'Se actualizó la inscripción de materia ' + req.params.idm
                });
                registerPetitions.create('PUT: 200, Se actualizo la informacion de una inscripcion');
            }
        });
        
    }

    public patch(req: Request, res: Response) {
       
        pool.query('UPDATE INSCRIPCION_MATERIAS set estado_inscripcion = ? WHERE id_materia = ? AND id_estudiante = ?', [req.body.estado_inscripcion, req.params.idm, req.params.ide], (err, results, fields) => {
            console.log(err);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                registerPetitions.create('PATCH: error 400 ');
                return;
            } else {
                res.status(200).json({
                    status: '200',
                    message: 'Se cambío el estado de la inscripción'
                });
                registerPetitions.create('PATCH: 200, Se actualizo el estado de una inscipcion');
            }
        });
        
    }
} 

export const inscriptionController = new InscriptionController();