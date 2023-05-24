const mongoose = require("mongoose")

const DB = 'mongodb://127.0.0.1:27017/Users'

mongoose.connect(DB, {
    useNewUrlParser: true,
   
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection Sucessful ...!")
}).catch('No Connection')




