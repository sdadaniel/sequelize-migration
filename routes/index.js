const {
    Router
} = require('express');
const router = Router();

const db = require("../models")




router.use('/', async (req, res) => {
    

    const student = await db.Student.findAll({})
    console.log(student);

    res.send(student)
});

module.exports = router;