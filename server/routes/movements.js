const express = require('express');
const router = express.Router();
const Movements = require('../models/movements.model');
const errors = require('../middlewares/error');

router.get('/', async (req, res, next) => {
    try {
        const data = await Movements.find().sort( { date: -1 } ).limit(10);
        res.status(200).json({
            state: 'success',
            data
        })
    } catch (error) {
        next({status: 500, message: 'Error reading DB' , stack: error})
    }
})

router.post('/', async (req, res, next) => {
    console.log(req.body)
    const {description, amount} = req.body;
    if (!description || !amount) {
        res.status(400).json({
            state: 'error',
            message: 'Description and amount are needed'
        });
    }
    const movement = new Movements({
        description,
        amount
    })
    try {
        const data = await movement.save()
        res.status(200).json({
            state: 'success',
            data
        })
    }catch(error){
        next({status: 500, message: 'Error writing DB' , stack: error})
    };
})

router.delete('/:movementId', async (req, res, next) => {
    const {movementId} = req.params;
    if (!movementId) {
        res.status(400).json({
            state: 'error',
            message: 'Movement ID are needed'
        });
    }
    try {
        const data = await Movements.remove({_id: movementId});
        res.status(200).json({
            state: 'success',
            data
        })
    } catch (error) {
        next({status: 500, message: 'Error deleting DB' , stack: error})
    }
})

//Update a movement
router.patch('/:movementId', async (req, res, next) => {
    const {movementId} = req.params;
    const {description, amount} = req.body;
    if (!movementId) {
        res.status(400).json({
            state: 'error',
            message: 'Movement ID are needed'
        });
    }
    if (!description && !amount) {
        res.status(400).json({
            state: 'error',
            message: 'Description and amount are needed'
        });
    }
    try {
        const data = await Movements.updateOne(
            {_id: movementId},
            { $set: {description, amount}});
        res.status(200).json({
            state: 'success',
            data
        })
    } catch (error) {
        next({status: 500, message: 'Error patching DB' , stack: error})
    }
})

router.use(errors.notFound);
router.use(errors.handler);
module.exports = router;