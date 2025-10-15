const express = require('express');
let mysql = require('mysql2');
const PORT = process.env.PORT || 3000;


const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
})

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: '3309',
    password: 'Jihaduttolibin123!',
    database: 'mahasiswa'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to mysql:', err.stack);
        return;
    }
    console.log('Connected to mysql successfully');
})


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})