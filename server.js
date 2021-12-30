const fs = require('fs');
const express = require('express');
const app = express();

const PORT = 5000;

// middleware
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

// app.get('/', (req, res)=>{
//     res.sendFile(__dirname + '/public/index.html');

// })

const dataSender = [];

app.post('/api', (req, res) => {
    console.log('i got a req!')
    console.log(req.body);
    const data = req.body;
    dataSender.push(data);
    console.log(dataSender);
    res.send('success')
        
    }
    


);




app.listen(PORT, ()=>{
    console.log('Server Running on 5000')
})

