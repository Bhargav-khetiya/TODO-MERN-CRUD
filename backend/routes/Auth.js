import express from 'express'

const AutRoutes = express.Router()
AutRoutes.post('/Register',(req,res)=>{
    res.send('hello world')
})

export default AutRoutes