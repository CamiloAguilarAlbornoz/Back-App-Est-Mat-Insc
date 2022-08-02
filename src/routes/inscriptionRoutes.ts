import {Router} from 'express';
import {inscriptionController} from '../controllers/inscriptionController'

class InscriptionRoutes{
    
    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',inscriptionController.list);
        this.router.get('/:id', inscriptionController.getId );
        this.router.post('/', inscriptionController.create);
        this.router.delete('/:id', inscriptionController.delete );
        this.router.put('/:id', inscriptionController.update );
        this.router.patch('/:id', inscriptionController.patch);
    }
}

const inscriptionRoutes = new InscriptionRoutes();
export default inscriptionRoutes.router