// let fs = require('fs');
const express = require('express');
const app = express();

const PORT = 5000;

// middleware
app.use(express.static('public'));
app.use(express.json());

// app.get('/', (req, res)=>{
//     res.sendFile(__dirname + '/public/index.html');

// })

app.post('/api', (req, res) => {
    console.log('i got a req!')
    console.log(reqbody);
});



app.listen(PORT, ()=>{
    console.log('Server Running on 5000')
})

