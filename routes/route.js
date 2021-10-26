const express = require('express');
const {Student} = require('../models/student');

const router = express.Router();






// fetch students from db: /api/student  [Get]  -> get all students
router.get('/student', async function (req, res) {
    const students = await Student.find();
    return res.json(students);
});

//   fetch a single student /api/student/:id  [Get]  
//-> single student
// since we are using a get request we need to use query params
// to specify the id we want to search for
router.get('/student/:id', async function (req, res) {
    const student = await Student.findOne({_id:req.params.id});
    return res.json(student);
});


//   delete record: /api/student/:id  [delete] -> delete a student record
router.delete('/student/:id', async function (req, res) {
    try{
        //const student = await Student.findOne({_id:req.params.id});
        await Student.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch {
        res.status(404).send();
    }
});

//    /api/student/:id  [patch] -> update a student record
router.patch('/students/:id', (req, res) => {
    Student.findByIdAndUpdate( req.params.id, req.body, {new: true})
    .then((student) => {
        if (! student) {
            res.send("a");
        }else {
            res.send(student);
        }
    });
});

// create a student /api/student      [post] -> create new student
router.post('/student', async function (req, res) {
    const student = new Student({
        username: req.body.username,
        class: req.body.class,
        rollnumber: req.body.rollnumber
    });
    await student.save();
    res.json(student);
});



module.exports = router;
