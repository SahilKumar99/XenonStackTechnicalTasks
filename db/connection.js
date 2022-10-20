const mongoose = require('mongoose')

const DB = `mongodb+srv://TestUser:TestPass@cluster0.e85kcqc.mongodb.net/Test?retryWrites=true&w=majority`

mongoose.connect(DB).then(()=>{
    console.log(`connection Success`)
}).catch((error)=> console.log(`no Connection`));