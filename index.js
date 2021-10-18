const express = require('express'); 
const todoRoutes = require('./routes/todo.js');

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/api', todoRoutes);

app.get ('/', (req, res) =>{
    res.send ('Hello from Homepage');
}); 

app.listen(PORT, () => {
    console.log(`Sever running on port: http://localhost:${PORT}`)
})
