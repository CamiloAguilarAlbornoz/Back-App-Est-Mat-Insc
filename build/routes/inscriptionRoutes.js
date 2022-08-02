"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inscriptionController_1 = require("../controllers/inscriptionController");
class InscriptionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', inscriptionController_1.inscriptionController.list);
        this.router.get('/:id', inscriptionController_1.inscriptionController.getId);
        this.router.post('/', inscriptionController_1.inscriptionController.create);
        this.router.delete('/:id', inscriptionController_1.inscriptionController.delete);
        this.router.put('/:id', inscriptionController_1.inscriptionController.update);
        this.router.patch('/:id', inscriptionController_1.inscriptionController.patch);
    }
}
const inscriptionRoutes = new InscriptionRoutes();
exports.default = inscriptionRoutes.router;
