const express = require('express')
const connectDB = require('./config/db')

const app = express()

//Connect to DB
connectDB()

// init json parser Middleware
app.use(express.json({
    extended: false
}))

//check for API
app.get('/', (req, res) => res.send('API running'))

// Define Routes
app.use('/api/videos', require('./routes/api/videos'))


// Serve static assets in production//////////// TO DO: delete if wont go to production

// if(process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'))

//     app.get("*", (req, res) =>{
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     })
// }

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))



