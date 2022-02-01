const express = require('express');
const app=express();
const trackerRoutes = require('./routes/trackerRoutes');
const seedDB = require('./seed');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');

app.get('/', (req, res) => {
    res.send('use /tracker to acess trackersss');
});

const sgMail = require('@sendgrid/mail');
const API_KEY = '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';
sgMail.setApiKey(API_KEY);

const message = {
    to:'abc@gmail.com',
    from: 'suyoggadal1823@gmail.com',
    subject: 'working',
    text: 'Hello from xyz',
    html: '<h1>hello</h1>',
};

sgMail.send(message)
.then(response => console.log('Email sent successfully'))
.catch(err => console.log(err.message));
mongoose.connect('mongodb://localhost:27017/tracker-db')
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log(err);
});

seedDB();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



app.use(trackerRoutes);

app.listen(2323, (req, res) => {
    console.log("Server Started At Port 2323");
});

