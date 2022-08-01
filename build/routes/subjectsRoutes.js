"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subjectsController_1 = require("../controllers/subjectsController");
class SubjectsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', subjectsController_1.subjectsController.list);
        this.router.get('/:id', subjectsController_1.subjectsController.getId);
        this.router.post('/', subjectsController_1.subjectsController.create);
        this.router.delete('/:id', subjectsController_1.subjectsController.delete);
        this.router.put('/:id', subjectsController_1.subjectsController.update);
        this.router.patch('/:id', subjectsController_1.subjectsController.patch);
    }
}
const subjectsRoutes = new SubjectsRoutes();
exports.default = subjectsRoutes.router;
