const express = require('express');
const app = express();
// const cors = require('cors');
const PORT = process.env.PORT || 7777;
const path = require('path');

// Använd CORS för att tillåta alla domäner
// app.use(cors());

const api = require(path.join(__dirname, 'routes', 'api.js'));
app.use(api);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});