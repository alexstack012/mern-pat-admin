const express = require('express');
const cors = require('cors');
const app = express();
require('./patadmin/server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./patadmin/server/routes/pat.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

// use npm run start within client dir --- this is localhost 3000
// use nodemon server.js within the overall project folder --- this is localhost 8000
