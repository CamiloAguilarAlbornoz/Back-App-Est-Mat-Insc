"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inscriptionController = void 0;
const registerPetitionsControll_1 = require("./registerPetitionsControll");
const database_1 = __importDefault(require("../database"));
class InscriptionController {
    list(req, res) {
        const inscripciones = database_1.default.query('select * from INSCRIPCION_MATERIAS', (err, results, fields) => {
            res.json(results);
            console.log(err);
            registerPetitionsControll_1.registerPetitions.create('GET: 200, Se obtuvieron las inscripciones');
        });
    }
    getId(req, res) {
        const inscripciones = database_1.default.query('select * from INSCRIPCION_MATERIAS where id_materia = ? and id_estudiante = ?', [req.params.idm, req.params.ide], (err, results, fields) => {
            console.log(err);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                registerPetitionsControll_1.registerPetitions.create('GET: error 400 '.concat(err.message));
                return;
            }
            else if (!results) {
                res.status(204).json({
                    status: '204',
                    result: 'No se encontró ningun registro que coincida con los parametros dados'
                });
                registerPetitionsControll_1.registerPetitions.create('GET: 204, No se encontró ningun registro que coincida con los parametros dados');
            }
            else {
                res.status(200).json({
                    status: '200',
                    result: results
                });
                registerPetitionsControll_1.registerPetitions.create('GET: 200, Se obtuvo una inscripcion por id');
            }
        });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO INSCRIPCION_MATERIAS set ?', [req.body], (err, results, fields) => {
            console.log(err);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                registerPetitionsControll_1.registerPetitions.create('POST: error 400');
                return;
            }
            else {
                res.status(200).json({
                    status: '200',
                    message: 'Se realizó la inscripcion de materia'
                });
                registerPetitionsControll_1.registerPetitions.create('POST: 200, Se agrego una nueva inscripcion');
            }
        });
    }
    delete(req, res) {
        res.json({ text: 'Eliminado una materia ' + req.params.idm });
    }
    update(req, res) {
        database_1.default.query('UPDATE INSCRIPCION_MATERIAS set ? WHERE id_materia = ? AND id_estudiante = ?', [req.body, req.params.idm, req.params.ide], (err, results, fields) => {
            console.log(err);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                registerPetitionsControll_1.registerPetitions.create('PUT: error 400');
                return;
            }
            else {
                res.status(200).json({
                    status: '200',
                    message: 'Se actualizó la inscripción de materia ' + req.params.idm
                });
                registerPetitionsControll_1.registerPetitions.create('PUT: 200, Se actualizo la informacion de una inscripcion');
            }
        });
    }
    patch(req, res) {
        database_1.default.query('UPDATE INSCRIPCION_MATERIAS set estado_inscripcion = ? WHERE id_materia = ? AND id_estudiante = ?', [req.body.estado_inscripcion, req.params.idm, req.params.ide], (err, results, fields) => {
            console.log(err);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                registerPetitionsControll_1.registerPetitions.create('PATCH: error 400 ');
                return;
            }
            else {
                res.status(200).json({
                    status: '200',
                    message: 'Se cambío el estado de la inscripción'
                });
                registerPetitionsControll_1.registerPetitions.create('PATCH: 200, Se actualizo el estado de una inscipcion');
            }
        });
    }
}
exports.inscriptionController = new InscriptionController();
