const mongoose = require('mongoose')

// Database string
const DB_URI = 'mongodb://localhost:27017/urlshortener'

// Connecting Database 
mongoose.connect(DB_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

module.export = connection
