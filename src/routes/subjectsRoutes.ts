import {Router} from 'express';
import {subjectsController} from '../controllers/subjectsController'

class SubjectsRoutes{
    
    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',subjectsController.list);
        this.router.get('/:id', subjectsController.getId );
        this.router.get('/estudiantesM/:id', subjectsController.listStudentsM);
        this.router.post('/', subjectsController.create);
        this.router.delete('/:id', subjectsController.delete );
        this.router.put('/:id', subjectsController.update );
        this.router.patch('/:id', subjectsController.patch);
    } 
}

const subjectsRoutes = new SubjectsRoutes();
export default subjectsRoutes.router