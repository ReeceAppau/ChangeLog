import express from 'express'

const app = express()

app.get('/', (req, res) => {
    console.log("Hello from express")
})

export default app