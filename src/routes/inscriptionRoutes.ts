import {Router} from 'express';
import {inscriptionController} from '../controllers/inscriptionController'

class InscriptionRoutes{
    
    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',inscriptionController.list);
        this.router.get('/:idm/:ide', inscriptionController.getId );
        this.router.post('/', inscriptionController.create);
        this.router.delete('/:idm/:ide', inscriptionController.delete );
        this.router.put('/:idm/:ide', inscriptionController.update );
        this.router.patch('/:idm/:ide', inscriptionController.patch);
    }
}

const inscriptionRoutes = new InscriptionRoutes();
export default inscriptionRoutes.router