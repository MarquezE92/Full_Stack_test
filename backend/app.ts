import express from 'express';
import router from './src/routes/index.ts'

const app = express();
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    next()
});

app.set('port', 3000);
app.use('/', router);

export default app