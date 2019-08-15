const path = require('path');
const express = require('express');
const app = express();
const publicpath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicpath));

// req = info about the request
// res = manipulate the response the express server makes to http request
app.get('*', (req, res) => {
    res.sendFile(path.join(publicpath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up');
});

 