import express from 'express';
import cors from 'cors';

import { WelcomeController, HeroesController } from './controllers';


const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/welcome', WelcomeController);
app.use('/heroes', HeroesController);

app.listen(port, () => {
    console.log(`Listening at http://location:${port}/`);
})