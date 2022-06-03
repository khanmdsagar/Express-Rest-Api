const app = require('./app')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

app.listen(process.env.PORT, function(){
    console.log('Server running at port http://localhost:3000');
});