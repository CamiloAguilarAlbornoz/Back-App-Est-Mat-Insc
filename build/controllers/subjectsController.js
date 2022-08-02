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
            res.json(results);
            registerPetitionsControll_1.registerPetitions.create('GET: 200, Se obtuvieron las materias');
        });
    }
    getId(req, res) {
        const materias = database_1.default.query('select * from MATERIAS where id_materia = ?', req.params.id, (err, results, fields) => {
            res.json(results);
            registerPetitionsControll_1.registerPetitions.create('GET: 200, Se obtuvo una materia por id');
        });
    }
    create(req, res) {
        database_1.default.query('INSERT INTO MATERIAS set ?', [req.body], (err, results, fields) => {
        });
        registerPetitionsControll_1.registerPetitions.create('POST: 200, Se agrego una nueva materia');
        res.json({ text: 'Se guardo una materia' });
    }
    delete(req, res) {
        res.json({ text: 'Eliminado una materia ' + req.params.id });
    }
    update(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE MATERIAS set ? WHERE id_materia = ?', [req.body, id], (err, results, fields) => {
        });
        registerPetitionsControll_1.registerPetitions.create('PUT: 200, Se actualizo la informacion de una materia');
        res.json({ text: 'actualizando una materia ' + req.params.id });
    }
    patch(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE MATERIAS set estado = ? WHERE id_materia = ?', [req.body.estado, id], (err, results, fields) => {
        });
        registerPetitionsControll_1.registerPetitions.create('PATCH: 200, Se actualizo el estado de una materia');
        res.json({ text: 'actualizando cambiado el estado de una materia ' + req.params.id });
    }
}
exports.subjectsController = new SubjectsController();
