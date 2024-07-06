import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = 5000 || process.env.PORT;

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => console.log(`App listening on port ${port}!`
    ));

