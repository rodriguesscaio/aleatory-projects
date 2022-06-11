const express = require('express');
const cors = require('cors'); // esse pacote vai dizer quem pode acessar a nossa aplicação;
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

