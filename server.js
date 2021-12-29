let fs = require('fs');
const express = require('express');
const app = express();

const PORT = 5000;

// middleware
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');

})

app.post('/dataServer', (req, res) => {
    console.log(req);

});



app.listen(PORT, ()=>{
    console.log('Server Running on 5000')
})

