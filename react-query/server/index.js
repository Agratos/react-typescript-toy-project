const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

let countDown = 0;
let count = 0;
let name = 'lee';
let todos = [
    {
        id: 1,
        todo: '오늘의 아침은'
    },{
        id: 2,
        todo: '오늘의 점심은'
    }
];

app.get('/countdown', (req,res) => {
    countDown = countDown + 1;
    res.send({ countDown })
})
app.get('/count', (req, res) => {
    count = count + 1;
    res.send({ count })
})
app.get('/name', (req, res) => {
    res.send({ name })
})
app.post('/multiple', (req, res) => {
    const { num } = req.body;
    res.send({result: num * num});
})


app.get('/todo', (req, res) => {
    //res.send(Error)
    res.send({todos});
})
app.post('/todo/test', (req, res) => {
    const result = todos.filter(({id}) => id === Number(req.body.userId));

    res.send({data: result})
})
app.post('/todo', (req, res) => {
    console.log(req.body.todo);
    todos.push(req.body.todo);
    res.send({todos});
})
app.put('/todo', (req, res) => {
    const updateTodo = req.body.todo;
    todos[todos.findIndex((todo) => todo.id === updateTodo.id)] = updateTodo;
    res.send({todos});
})
app.delete('/todo', (req, res) => {
    const delId = req.body.id
    todos = todos.filter(({id}) => id !== delId);
    res.send({todos});
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
