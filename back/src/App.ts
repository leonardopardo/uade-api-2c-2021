import * as express from 'express';
import * as mongoose from 'mongoose';

import { ChildRoutes } from './routes/ChildRoutes';
import { ControlRoutes } from './routes/ControlRoutes';
import { ParentRoutes } from './routes/ParentRoutes';
import { UserRoutes } from './routes/UserRoutes';
import { VaccineRoutes } from './routes/VaccineRoutes';
 
class App {
    
    public app: express.Application;
    
    public router: express.Router = express.Router();

    public childRoutes: ChildRoutes =  new ChildRoutes();
    public controlRoutes: ControlRoutes =  new ControlRoutes();
    public parentRoutes: ParentRoutes =  new ParentRoutes();
    public userRoutes: UserRoutes =  new UserRoutes();
    public vaccineRoutes: VaccineRoutes =  new VaccineRoutes();

    // TODO: Find a way of using environment variables here
    public mongoUrl: string = '';

    constructor(){
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.routes();
        this.configureMongo();
    }

    private routes() {
        this.app.use('/', this.router);
        this.childRoutes.routes(this.router);
        this.controlRoutes.routes(this.router);
        this.parentRoutes.routes(this.router);
        this.userRoutes.routes(this.router);
        this.vaccineRoutes.routes(this.router);
    }

    private configure() {
    }

    private configureMongo() {
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
    }
}

export default new App().app;