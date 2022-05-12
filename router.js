const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', function (req, res) {
    res.send('Server is up and running.');
})

router.get('/users/getusers' , controller.getUsers)

router.post('/users/createUsers', controller.createUsers)

router.get('/users/getusersById/:id', controller.getusersById)

router.put('/users/updateUsersById/:id', controller.updateUsersById)
   
router.delete('/users/deleteUsersById/:id', controller.deleteUsersById)

module.exports = router;