const express = require('express');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getAllUsers = (req, res) => {
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
    res.json(users);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createUSer = (req, res) => {
    const user = req.body;
    user.id = 86546;

    const result = {
        message: 'User created',
        user
    }
    res.status(201).json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateUser = (req, res) => {
    const { id } = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'User Update',
        user
    }
    res.json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updatePartialUser= (req, res) => {
    const { id } = req.params;
    const user = req.body;

    user.id = id; 

    const result = {
        message: 'User Update with patch',
        user
    }
    res.json(result)
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const deleteUser = (req, res) => {
   
    //const id = req.params.id;
    const { id } = req.params;
    const result = {
        message: `User with id ${id} deleted`
    }
    res.json(result)
};

module.exports = {
    getAllUsers,
    createUSer,
    updateUser,
    updatePartialUser,
    deleteUser    
}