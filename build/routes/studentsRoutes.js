"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentsController_1 = require("../controllers/studentsController");
class StudentsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', studentsController_1.studentsController.list);
        this.router.get('/:id', studentsController_1.studentsController.getId);
        this.router.get('/documento/:id', studentsController_1.studentsController.getDocument);
        this.router.get('/codigo/:id', studentsController_1.studentsController.getByCode);
        this.router.post('/', studentsController_1.studentsController.create);
        this.router.delete('/:id', studentsController_1.studentsController.delete);
        this.router.put('/:id', studentsController_1.studentsController.updateStudent);
        this.router.patch('/:id', studentsController_1.studentsController.setState);
    }
}
const studentsRoutes = new StudentsRoutes();
exports.default = studentsRoutes.router;
