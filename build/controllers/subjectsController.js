"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectsController = void 0;
const database_1 = __importDefault(require("../database"));
const registerPetitionsControll_1 = require("./registerPetitionsControll");
class SubjectsController {
    list(req, res) {
        const materias = database_1.default.query('select * from MATERIAS', (err, results, fields) => {
            //res.json(results);
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                registerPetitionsControll_1.registerPetitions.create('GET: error 400 '.concat(err.message));
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
                registerPetitionsControll_1.registerPetitions.create('GET: 200, Se obtuvieron las materias');
            }
        });
    }
    getId(req, res) {
        const materias = database_1.default.query('select * from MATERIAS where id_materia = ?', req.params.id, (err, results, fields) => {
            if (err) {
                res.status(400).json({
                    status: 'error 400',
                    message: err.message
                });
                registerPetitionsControll_1.registerPetitions.create('GET: error 400 '.concat(err.message));
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
                registerPetitionsControll_1.registerPetitions.create('GET: 200, Se obtuvo una materia por id');
            }
        });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO MATERIAS set ?', [req.body], (err, results, fields) => {
            if (err) {
            }
            else if (!results) {
                res.status(400).json({
                    status: 'error 400',
                    message: err
                });
                registerPetitionsControll_1.registerPetitions.create('POST: error 400');
            }
            else {
                res.status(200).json({
                    status: '200',
                    message: 'Se agrego una nueva materia'
                });
                registerPetitionsControll_1.registerPetitions.create('POST: 200, Se agrego una nueva materia');
            }
        });
        res.json({ text: 'Se guardo una materia' });
    }
    delete(req, res) {
        res.json({ text: 'Eliminado una materia ' + req.params.id });
    }
    update(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE MATERIAS set ? WHERE id_materia = ?', [req.body, id], (err, results, fields) => {
            registerPetitionsControll_1.registerPetitions.create('PUT: 200, Se actualizo la informacion de una materia');
        });
        res.json({ text: 'actualizando una materia ' + req.params.id });
    }
    patch(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE MATERIAS set estado = ? WHERE id_materia = ?', [req.body.estado, id], (err, results, fields) => {
            registerPetitionsControll_1.registerPetitions.create('PATCH: 200, Se actualizo el estado de una materia');
        });
        res.json({ text: 'actualizando cambiado el estado de una materia ' + req.params.id });
    }
}
exports.subjectsController = new SubjectsController();
