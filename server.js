const express = require('express')
const connectDB = require('./config/db')

const app = express()

//Connect to DB
connectDB()

// init json parser Middleware
app.use(express.json({
    extended: false
}))

// Define Routes
app.use('/api/videos', require('./routes/api/videos'))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))



