require('dotenv').config();
const app = require('./src/app.js');

const port = process.env.PORT || 3000;




app.listen(port, () => {
    console.log('Server started on port 3000');
})