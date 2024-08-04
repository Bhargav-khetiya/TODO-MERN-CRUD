import express from 'express'
import dotenv from 'dotenv'
import AutRoutes from './routes/Auth.js'
dotenv.config()

const PORT =process.env.port
const app =express()

app.get('/',(rew,res)=>{        //just run the project will show this
    res.send('hello word')
})

app.use('/auth',AutRoutes)

app.listen(PORT,()=>{
    console.log('app is running on',PORT)
})