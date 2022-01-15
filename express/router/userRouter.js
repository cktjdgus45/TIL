import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.status(201).send('GET: /user');
})

export default userRouter;