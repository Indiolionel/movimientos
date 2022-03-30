const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/users.model');
const jwt = require('jsonwebtoken');
const logger = require('../logger');
const errors = require('../middlewares/error');
const { register, login } = require('../validation/users');
const verify = require('../middlewares/auth');


router.post('/register', async (req, res, next) => {

    //Validate the user req data.
    const {error} = register.validate(req.body);
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).json({status: 'error', type: 'validation', errors })
    }

    const {name, email, password} = req.body

    const emailExist = await User.findOne({email})

    if (emailExist) {
        return res.status(400).json({status: 'error', type: 'email already exist in the DB' })
    }

    // Has password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
        name,
        email,
        password: hashedPassword
    })

    try {
        const data = await user.save();
        logger.log('info', `Saved user is OK, responding`)
        res.status(200).json({
            state: 'success',
            data : {userID: data._id}
        })
    } catch (error) {
        next({status: 500, message: 'Error reading DB' , stack: error})
    }

})

router.post('/login', async (req, res, next) => {

    //Validate the user req data.
    const {error} = login.validate(req.body);
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).json({status: 'error', type: 'validation', errors })
    }

    const {email, password} = req.body

    try {

        const user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({status: 'error', type: "Email doesn't exist" });
        }

        const validPass = await bcrypt.compare(password, user.password)
        if (!validPass) {
            return res.status(400).json({status: 'error', type: "Wrong password" });
        }

        //Create and assign a token
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);

        res.header('auth-token', token)

        res.status(200).json({
            state: 'success',
            data : {userID: user._id}
        })
    } catch (error) {
        next({status: 500, message: 'Error reading DB' , stack: error})
    }


})

router.post('/secret', verify, async (req, res, next) => {
    res.send("Secret")
})

router.use(errors.notFound);
router.use(errors.handler);
module.exports = router;