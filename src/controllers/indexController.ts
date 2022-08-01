import {Request, Response } from 'express';

class IndexController {

    index(req: Request, res: Response) {
        res.send('Aplicacion Estudiantes')
    }
} 

export const indexController = new IndexController();