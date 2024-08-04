import express from 'express'

const app =express()

app.get('/',(rew,res)=>{
    res.send('hello word')
})

app.listen(4000)