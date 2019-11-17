// // var express = require("express");
// // var app = express();
// // const StartModel = require("./models/StartModel");
// const bodyParser = require("body-parser");
// // const mongoose = require('mongoose')
// // let port = 8000

// // require("./database/database");
// // StartModel.LoadUsers();
// // StartModel.LoadTasks();
// // StartModel.LoadPosts();
// //app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());

// // app.use("/api/users", require("./routes/UsersRoute")); 
// // app.use("/api/tasks", require("./routes/TasksRouter"));


// // mongoose.connect(process.env.MONGODB_URI, {
// //     useNewUrlParser: true
// // }).then(() => {
// //     mongoose.set('useFindAndModify', false);


// //     app.listen(port, () => console.log(`Running server on port ${port}`))
// // })



// // require('dotenv').config()

// const express = require('express')
// const app = express()
// //const port = process.env.PORT
// const path = require('path')
// let port = process.env.PORT || 8000 
// //const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
// app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
// //const router = require('./routes/api')


//     const StartModel = require("./models/StartModel");
// //require("./database/database");
// //StartModel.LoadUsers();


// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')

//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
//     next()  
// })

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//     extended: false
// }))


// app.use(express.static(path.join(__dirname, 'public/main-layout')))
// app.use(express.static(path.join(__dirname, 'public')))


// mongoose.connect( 'mongodb://localhost/FinalProgect', {
//     useNewUrlParser: true
// }).then(() => {
//     mongoose.set('useFindAndModify', false);
//     app.use("/", require("./routes/UsersRoute")); 
//     app.use("/api/tasks", require("./routes/TasksRouter"));
//     app.listen(port, () => console.log(`Running server on port ${port}`))
// })





const express = require('express')
const app = express()
//const port = process.env.PORT
const path = require('path')
let port = process.env.PORT || 8000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const router = require('./routes/UsersRoute')

// const StartModel = require("./models/StartModel");
// //require("./database/database");
// //StartModel.LoadUsers();


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')

    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))


app.use(express.static(path.join(__dirname, 'public/main-layout')))
app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/FinalProgect', {
    useNewUrlParser: true
}).then(() => {
    mongoose.set('useFindAndModify', false);

    app.use('/', router)


    app.listen(port, () => console.log(`Running server on port ${port}`))
})