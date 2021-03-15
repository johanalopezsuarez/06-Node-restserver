require('dotenv').config();

const { response } = require('express');
const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/users', (req, res) => {
    //res.send('Hello World')
    const users = [
        {
            id: 1,
            name: 'Johana'
        },
        {
            id: 2,
            name: 'Marta'
        }
    ]
    //res.status().json(users);
    res.json(users);
});

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = 86546

    const result = {
        message: 'User created',
        user
    }
    res.status(201).json(result);
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'User Update',
        user
    }
    res.status(200).json(result);
});

app.patch('/users', (req, res) => {
    const { id } = req.params;
    const user = req.body;

    user.id = id; 

    const result = {
        message: 'User Update with patch',
        user
    }
    res.status(200).json(result)
});

app.delete('/users/:id', (req, res) => {
   
    //const id = req.params.id;
    const { id } = req.params;
    const result = {
        message: `User with id ${id} delete`
    }
    res.json(result)
});

app.listen(port, () => {
    console.log(`########## App started. Port: ${port} ##########`);
});

