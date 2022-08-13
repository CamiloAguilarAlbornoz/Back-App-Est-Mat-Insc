"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPetitions = void 0;
const database_1 = __importDefault(require("../database"));
class RegisterPetitionsController {
    create(estado) {
        database_1.default.query(`INSERT INTO REGISTROS_PETICIONES (estado, descripcion) VALUES ('${estado}','Captado en el servidor 1');`);
    }
}
exports.registerPetitions = new RegisterPetitionsController();
