const express = require('express')
const router = new express.Router()
const Student = require("../models/studentSchema")

router.get('/student', (req, res) => {
    res.send('Hello whats guys')
})

router.post('/students', async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save()
        console.log(createUser)
        res.status(200).send(createUser)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.get('/students', async (req, res) => {
    try {
        const getAllData = await Student.find({})
        res.send(getAllData)
    } catch (error) {
        res.send(error)
        console.log(error)
    }
})

router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(req.params.phone)
        const data = await Student.findById({ _id })
        res.send(data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const updateData = await Student.findByIdAndUpdate({ _id }, req.body, { new: true })
        console.log(updateData)
        res.send(updateData)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.delete(('/students/:id'),async(req, res)=>{
    try {
        const _id = req.params.id
        const delteData = await Student.deleteOne({_id})
        res.send(delteData)
        console.log(delteData)

    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router














