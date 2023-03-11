const express = require('express')
const router = express.Router()

let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]
router.use(express.json());
router.use(express.urlencoded({extended:true}));   
router.get('/',(req,res)=>{
    res.json(users)
})
router.get('/:id',(req,res)=>{
    const id = req.params.id-1
    res.json(users[id])
})
router.post('/',(req,res)=>{
    users.push(req.body)
    res.json(users)
})
router.put('/:id',(req,res)=>{
    const id = req.params.id
    users.splice(id-1,1)
    users.splice(id-1,0,req.body)
    res.json(users)
})
router.delete('/:id',(req,res)=>{
    const id = req.params.id
    users.splice(id-1,1)
    res.json(users)
})
module.exports = router