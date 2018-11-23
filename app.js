const express = require('express')
const app = express()
const port = 3000


app.use(function(req, res, next) {
    var ip = req.headers['x-forwarded-for'] || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress ||
         (req.connection.socket ? req.connection.socket.remoteAddress : null);
    next();
    
});

app.get('/', (req, res) => res.send('Heyy'));     

app.listen(port, () => console.log(`Example app listening on port ${port}!`));