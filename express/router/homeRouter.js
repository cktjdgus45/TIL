import express from 'express';

const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
    res.status(201).send('GET: /');
})

export default homeRouter;