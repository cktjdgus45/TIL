import express from 'express';
const app = express();

app.all('/api', (req, res, next) => {
    console.log('all');
    next();
})
app.get('/sky',
    (req, res, next) => {
        console.log('first');
        // next(new Error('Error'));
        next('use')
    },
    (req, res, next) => {
        console.log('first2');
        next();
    },
    (req, res, next) => {
        console.log('first3');
        res.send('end of middleware')
    },
)

app.use((req, res, next) => {
    res.status(404).send('Note available!');
})
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('Sorry try later!');
})
app.listen(7777);