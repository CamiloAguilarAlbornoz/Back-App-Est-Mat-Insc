import { registerPetitions } from './registerPetitionsControll';
import { Request, Response } from 'express';

import pool from '../database'
class StudentsController {

    public list(req: Request, res: Response) {
        const estudiantes = pool.query('select * from ESTUDIANTES', function (err, results, fields) {
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
                registerPetitions.create('GET: 200, Se obtuvieron los estudiantes');
            }
        });

    }

    public getId(req: Request, res: Response) {
        const estudiantes = pool.query('select * from ESTUDIANTES where id_estudiante = ?', req.params.id, function (err, results, fields) {
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
                registerPetitions.create('GET: 200, Se obtuvo un estudiante por id');
            }
        });
    }

    public getByCode(req: Request, res: Response) {
        const estudiantes = pool.query('select * from ESTUDIANTES where codigo = ?', req.params.id, function (err, results, fields) {
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
                registerPetitions.create('GET: 200, Se obtuvo un estudiante por codigo');
            }
        });
    }

    public getDocument(req: Request, res: Response) {
        const estudiantes = pool.query('select * from ESTUDIANTES where numero_documento = ?', req.params.id, function (err, results, fields) {
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
                registerPetitions.create('GET: 200, Se obtuvo un estudiante por documento');
            }
        });
    }

    public async create(req: Request, res: Response) {
        pool.query('INSERT INTO ESTUDIANTES set ?', [req.body], function (err, results, fields) {
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
                    message: 'Se agrego un nuevo estudiante'
                });
                registerPetitions.create('POST: 200, Se agrego un nuevo estudiante');
            }

        });
        //await pool.execute('INSERT INTO estudiantes (numero_documento, tipo_documento, nombre, apellido, codigo) values ("' + req.body.numero_documento+'","'+req.body.tipo_documento+'","'+req.body.nombre+'","'+req.body.apellido+'","'+req.body.codigo+'");');
 
    }

    public delete(req: Request, res: Response) {
        res.json({ text: 'Eliminado un estudiante ' + req.params.id });
    }

    public updateStudent(req: Request, res: Response) {
        const { id } = req.params;
        pool.query('UPDATE ESTUDIANTES set ? WHERE id_estudiante = ?', [req.body, id], (err, results, fields) => {
            if (err) {
            } else if (!results) {
                res.status(400).json({
                    status: 'error 400',
                    message: err
                });
                registerPetitions.create('PUT: error 400');
            } else {
                res.status(200).json({
                    status: '200',
                    message: 'Se actualizo la informacion de un estudiante'
                });
                registerPetitions.create('PUT: 200, Se actualizo la informacion de un estudiante');
            }
        });
    }

    public setState(req: Request, res: Response) {
        const { id } = req.params;
        pool.query('UPDATE ESTUDIANTES set estado = ? WHERE id_estudiante = ?', [req.body.estado, id], (err, results, fields) => {
            if (err) {
            } else if (!results) {
                res.status(400).json({
                    status: 'error 400',
                    message: err
                });
                registerPetitions.create('PATCH: error 400 ');
            } else {
                res.status(200).json({
                    status: '200',
                    message: 'Se actualizo el estado de un estudiante'
                });
                registerPetitions.create('PATCH: 200, Se actualizo el estado de un estudiante');
            }
        });
    }
}



export const studentsController = new StudentsController();