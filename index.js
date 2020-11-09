const express = require('express'),
app = express();
// express configs
app.use(express.urlencoded({extended:true}))
// express route
app.get('/', (req, res) => {
    res.send('routing works!')
})
// express 404 wild card route
app.get('*', (req, res) => {
    res.send('404 Not Found')
})

// listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));