"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsController = void 0;
const registerPetitionsControll_1 = require("./registerPetitionsControll");
const database_1 = __importDefault(require("../database"));
class StudentsController {
    list(req, res) {
        const estudiantes = database_1.default.query('select * from ESTUDIANTES', function (err, results, fields) {
            res.json(results);
            registerPetitionsControll_1.registerPetitions.create('GET: 200, Se obtuvieron los estudiantes');
        });
    }
    getId(req, res) {
        const estudiantes = database_1.default.query('select * from ESTUDIANTES where id_estudiante = ?', req.params.id, function (err, results, fields) {
            res.json(results);
            registerPetitionsControll_1.registerPetitions.create('GET: 200, Se obtuvo un estudiante por id');
        });
    }
    getByCode(req, res) {
        const estudiantes = database_1.default.query('select * from ESTUDIANTES where codigo = ?', req.params.id, function (err, results, fields) {
            res.json(results);
            registerPetitionsControll_1.registerPetitions.create('GET: 200, Se obtuvo un estudiante por codigo');
        });
    }
    getDocument(req, res) {
        const estudiantes = database_1.default.query('select * from ESTUDIANTES where numero_documento = ?', req.params.id, function (err, results, fields) {
            res.json(results);
            registerPetitionsControll_1.registerPetitions.create('GET: 200, Se obtuvo un estudiante por documento');
        });
    }
    async create(req, res) {
        database_1.default.query('INSERT INTO ESTUDIANTES set ?', [req.body], function (err, results, fields) {
        });
        registerPetitionsControll_1.registerPetitions.create('POST: 200, Se agrego un nuevo estudiante');
        res.json({ text: 'Se guardo un estudiante' });
    }
    delete(req, res) {
        res.json({ text: 'Eliminado un estudiante ' + req.params.id });
    }
    updateStudent(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE ESTUDIANTES set ? WHERE id_estudiante = ?', [req.body, id], (err, results, fields) => {
        });
        registerPetitionsControll_1.registerPetitions.create('PUT: 200, Se actualizo la informacion de un estudiante');
        res.json({ text: 'Se actualizo la informacion de un estudiante' });
    }
    setState(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE ESTUDIANTES set estado = ? WHERE id_estudiante = ?', [req.body.estado, id], (err, results, fields) => {
        });
        registerPetitionsControll_1.registerPetitions.create('PATCH: 200, Se actualizo el estado de un estudiante');
        res.json({ text: 'Se actualizo el estado de un estudiante' });
    }
}
exports.studentsController = new StudentsController();
