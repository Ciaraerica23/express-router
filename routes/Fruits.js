const express = require('express')
const router = express.Router()

let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]
router.use(express.json());
router.use(express.urlencoded({extended:true}));   
router.get('/',(req,res)=>{
    res.json(fruits)
})
router.get('/:id',(req,res)=>{
    const id = req.params.id-1
    res.json(fruits[id])
})
router.post('/',(req,res)=>{
    fruits.push(req.body)
    res.json(fruits)
})
router.put('/:id',(req,res)=>{
    const id = req.params.id
    fruits.splice(id-1,1)
    fruits.splice(id-1,0,req.body)
    res.json(fruits)
})
router.delete('/:id',(req,res)=>{
    const id = req.params.id
    fruits.splice(id-1,1)
    res.json(fruits)
})
module.exports = router