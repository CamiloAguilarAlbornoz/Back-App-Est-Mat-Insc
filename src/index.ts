import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import studentsRoutes from './routes/studentsRoutes';
import subjectsRoutes from './routes/subjectsRoutes';
import inscriptionRoutes from './routes/inscriptionRoutes';

class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev')); //mostrar en consola peticiones que se hacen al servidor
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(): void{
        this.app.use(indexRoutes);
        this.app.use('/Estudiantes', studentsRoutes);
        this.app.use('/Materias', subjectsRoutes);
        this.app.use('/Inscripcion', inscriptionRoutes);
    }
    start(): void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on port: ' + this.app.get('port'));
            
        });
    }
}

const server = new Server();
server.start();
