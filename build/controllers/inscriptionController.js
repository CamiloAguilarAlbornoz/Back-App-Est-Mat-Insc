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
        const inscripciones = database_1.default.query('SELECT m.nombre_materia "MATERIA", COUNT(e.id_estudiante) "CANTIDAD" from ESTUDIANTES e, MATERIAS m, INSCRIPCION_MATERIAS i WHERE e.id_estudiante = i.id_estudiante AND m.id_materia = i.id_materia GROUP BY m.id_materia', (err, results, fields) => {
            res.json(results);
            registerPetitionsControll_1.registerPetitions.create('GET: 200, Se obtuvieron las inscripciones');
        });
    }
    getId(req, res) {
        const inscripciones = database_1.default.query('select i.id_inscripcion, e.nombre, e.apellido, m.nombre_materia, i.estado_inscripcion from ESTUDIANTES e, MATERIAS m, INSCRIPCION_MATERIAS i WHERE e.id_estudiante = i.id_estudiante AND m.id_materia = i.id_materia AND i.id_inscripcion = ?', req.params.id, (err, results, fields) => {
            res.json(results);
            registerPetitionsControll_1.registerPetitions.create('GET: 200, Se obtuvo una inscripcion por id');
        });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO INSCRIPCION_MATERIAS set ?', [req.body], (err, results, fields) => {
        });
        registerPetitionsControll_1.registerPetitions.create('POST: 200, Se agrego una nueva inscripcion');
        res.json({ text: 'Se agrego una nueva inscripcion' });
    }
    delete(req, res) {
        res.json({ text: 'Eliminado una materia ' + req.params.idm });
    }
    update(req, res) {
        database_1.default.query('UPDATE INSCRIPCION_MATERIAS set ? WHERE id_inscripcion = ?', [req.body, req.params.id], (err, results, fields) => {
        });
        registerPetitionsControll_1.registerPetitions.create('PUT: 200, Se actualizo la informacion de una inscripcion');
        res.json({ text: 'Se actualizo la informacion de una inscripcion' });
    }
    patch(req, res) {
        database_1.default.query('UPDATE INSCRIPCION_MATERIAS set estado_inscripcion = ? WHERE id_inscripcion = ?', [req.body.estado_inscripcion, req.params.id], (err, results, fields) => {
        });
        registerPetitionsControll_1.registerPetitions.create('PATCH: 200, Se actualizo el estado de una inscipcion');
        res.json({ text: 'Se actualizo el estado de una inscipcion' });
    }
}
exports.inscriptionController = new InscriptionController();
