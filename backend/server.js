import app from'./src/app.js';
const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
        console.log(`Server is now running on port: ${PORT}`)
})