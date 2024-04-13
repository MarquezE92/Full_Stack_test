import express from 'express';
import router from './src/routes/index.js'

const app = express();
app.use(express.json());

app.set('port', 3000);
app.use('/', router);

export default app