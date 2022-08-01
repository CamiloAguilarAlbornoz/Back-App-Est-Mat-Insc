"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const studentsRoutes_1 = __importDefault(require("./routes/studentsRoutes"));
const subjectsRoutes_1 = __importDefault(require("./routes/subjectsRoutes"));
const inscriptionRoutes_1 = __importDefault(require("./routes/inscriptionRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev')); //mostrar en consola peticiones que se hacen al servidor
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/Estudiantes', studentsRoutes_1.default);
        this.app.use('/Materias', subjectsRoutes_1.default);
        this.app.use('/Inscripcion', inscriptionRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port: ' + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
