import express from 'express';
import homeRouter from './router/homeRouter.js';
import userRouter from './router/userRouter.js';
const app = express();

app.use(express.json()); //REST API - Body parsing
app.use(express.urlencoded({ extended: false })); //HTML Form parsing
app.use(express.static('public')); //
// app.get('/index.html',(req,res,next)=>{})

app.route('/posts')
    .get((req, res, next) => {
        res.status(201).send('GET: /posts');
    }).post((req, res, next) => {
        console.log(req);
    }).put((req, res) => {
        res.status(201).send('PUT: /posts/');
    }).delete((req, res) => {
        res.status(201).send('DELETE: /posts/');
    })

app.use('/', homeRouter);
app.use('/user', userRouter);

app.listen(7777);