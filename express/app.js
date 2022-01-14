import express from 'express';
const app = express();

app.use(express.json());

app.post('/', (req, res, next) => {
    console.log(req.body); //undefined; express에서 body의 내용을 읽을려면 지원해주는 미들웨어 사용해야함.
})
app.listen(7777);