const fs = require('fs');
const express = require('express');
const { finished } = require('stream');
const app = express();




const PORT = 5000;

// middleware
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));







app.post('/api', (req, res) => {
    const data = req.body;
    const words = JSON.stringify(data, null, 2);
    res.send('success')
    fs.appendFile('data.json', words, finished);
    function finished(err) {
    console.log('all set')
    console.log(words)
        } 
   }
);




app.listen(PORT, ()=>{
    console.log('Server Running on 5000')
})

