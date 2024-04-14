import app from './app.ts'
import sequelize from './src/db.ts';

const port = app.get('port');

sequelize.sync({ force: true })
.then(()=> {
    app.listen(port, () => {
    console.log("Server listening at", port);
    });
})