const router = require('express').Router()
const { v4: uuidv4 } = require('uuid');

const users = []

router.get('/', (req, res) => {
    res.send('Hello world')
})

router.get('/users', (req, res) => {
    res.send(users)
})

router.post('/users', (req, res) => {
    const user = req.body
    try {
        users.push({...user, id:uuidv4()})
        res.json({
            status:201,
            message:`Add user with name ${user.firstname} success in database`
        })
    } catch (error) {
        res.json({
            status:401,
            message:error
        })
    }
})

module.exports = router