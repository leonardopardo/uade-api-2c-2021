import * as express from 'express';
import * as mongoose from 'mongoose';

import { UserRoutes } from './routes/UserRoutes';

 
class App {
    
    public app: express.Application;
    
    public router: express.Router = express.Router();

    public userRoutes: UserRoutes =  new UserRoutes();

    public mongoUrl: string = 'mongodb://root:root@localhost:27017/';

    constructor(){
        this.app = express();
        this.app.use(express.urlencoded({extended:true}));
        this.routes();
    }

    private routes() {
        this.app.use('/', this.router);
        this.userRoutes.routes(this.router);
    }

    private configure() {
    }

    private configureMongo() {
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
    }
}

export default new App().app;