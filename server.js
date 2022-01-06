
// setting up node file system and express
const fs = require('fs');
const express = require('express');
// const { finished } = require('stream');
// common for setup of express
const app = express();

// setting port number
const PORT = 5000;

// middleware used to displaly html in public folder
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.get('/results', function(req, res){
    const file = fs.readFileSync('data.json');
    blogPosts = JSON.parse(file);
    res.json(blogPosts);
});

// makinig api that recieves data and sends it to data.json
app.post('/api', (req, res) => {
  const data = req.body;

  const file = fs.readFileSync('data.json');
  blogPosts = JSON.parse(file);
  blogPosts.push(data);
  fs.writeFileSync('data.json', JSON.stringify(blogPosts, null, 4));
  
  res.send('success');

  console.log('all set');

});



app.listen(PORT, () => {
  console.log('Server Running on 5000');
});
