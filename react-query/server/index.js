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
let todo = [{
    id: 1,
    todo: '오늘의 아침은'
}];

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
    res.send({todo});
})
app.post('/todo', (req, res) => {
    todo.push(req.body.todo);
    res.send({todo});
})
app.put('/todo', (req, res) => {
    const updateTodo = req.body.todo
    todo[todo.findIndex((todo) => todo.id === updateTodo.id)] = updateTodo;
    //console.log(todo.findIndex((todo) => todo.id === updateTodo.id))
    console.log(updateTodo.id)
    res.send({todo});
})
app.delete('/todo', (req, res) => {
    const delId = req.body.id
    todo = todo.filter(({id}) => id !== delId);
    res.send({todo});
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
