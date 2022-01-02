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
    const word = JSON.stringify(data, null, 2);


    const file =  fs.readFileSync('data.json');
    blogPosts = JSON.parse(file);
    blogPosts.push(data);
     fs.writeFileSync('data.json', JSON.stringify(blogPosts, null, 4));
    

   
    

    res.send('success');
    // fs.writeFile('data.json', word, {'flag':'a'}, finished);
    // function finished(err) {
    // console.log('all set');
    //     } 
   }
);




app.listen(PORT, ()=>{
    console.log('Server Running on 5000')
})

