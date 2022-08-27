import express, { Request, Response } from 'express'

const PORT = process.env.PORT || 3001

// APP
const app = express()
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})