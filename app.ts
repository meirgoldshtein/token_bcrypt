import e from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import AuthController from './src/Controllers/AuthController';
import TodoController from './src/Controllers/TodoController';
import UsersController from './src/Controllers/UsersController';


const app = e();
app.use(e.json());
app.use(cookieParser());
app.use('/auth', AuthController);
app.use('/users', UsersController);
app.use('/todos', TodoController);


app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})

