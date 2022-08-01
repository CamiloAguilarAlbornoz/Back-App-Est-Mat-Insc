import {Router} from 'express';
import {studentsController} from '../controllers/studentsController'

class StudentsRoutes{
    
    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',studentsController.list);
        this.router.get('/:id', studentsController.getId);
        this.router.get('/documento/:id', studentsController.getDocument);
        this.router.get('/codigo/:id', studentsController.getByCode);
        this.router.post('/', studentsController.create);
        this.router.delete('/:id', studentsController.delete );
        this.router.put('/:id', studentsController.updateStudent );
        this.router.patch('/:id', studentsController.setState);
    }
}

const studentsRoutes = new StudentsRoutes();
export default studentsRoutes.router;