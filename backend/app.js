
const express = require('express');
const AuthRoute = require('./routes/auth.route');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cors());

app.use('/auth', AuthRoute);
app.listen(PORT, () => console.log(`Server Run on port : ${PORT}`));