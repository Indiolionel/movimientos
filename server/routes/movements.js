const express = require('express');
const router = express.Router();
const Movements = require('../models/movements.model');
const errors = require('../middlewares/error');
const logger = require('../logger');

router.get('/', async (req, res, next) => {
    logger.log('info', `Request GET`)
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
    logger.log('info', `Request POST, with this body: ${JSON.stringify(req.body)}`)
    const {description, amount} = req.body;
    if (!description || !amount) {
        res.status(400).json({
            state: 'error',
            message: 'Description and amount are needed'
        });
        logger.log('error', `Request POST, Description and amount are needed`)
        return;
    }
    const movement = new Movements({
        description,
        amount
    })
    try {
        const data = await movement.save()
        logger.log('info', `Saving in DB is OK, responding`)
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
    logger.log('info', `Request DELETE, with this id: ${movementId}`)
    if (!movementId) {
        logger.log('error', `Request DELETE, Movement ID are needed`)
        res.status(400).json({
            state: 'error',
            message: 'Movement ID are needed'
        });
        return;
    }
    try {
        const data = await Movements.deleteOne({_id: movementId});
        logger.log('info', `Delete in DB is OK, responding`)
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
    logger.log('info', `Request PATCH, with this id: ${movementId}, and this body: ${JSON.stringify(req.body)}`)
    if (!movementId) {
        logger.log('error', `Request PATCH, Movement ID are needed`)
        res.status(400).json({
            state: 'error',
            message: 'Movement ID are needed'
        });
        return;
    }
    if (!description && !amount) {
        logger.log('error', `Request PATCH, Movement ID are needed`)
        res.status(400).json({
            state: 'error',
            message: 'Description and amount are needed'
        });
        return;
    }
    try {
        const data = await Movements.updateOne(
            {_id: movementId},
            { $set: {description, amount}});
        logger.log('info', `Delete in DB is OK, responding`)
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