const express = require("express")
const app = express()
const port = 3000
const userRouter = require('./routes/Users')
const fruitRouter = require('./routes/Fruits')

app.use('/Users',userRouter)
app.use('/Fruits',fruitRouter)





app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
