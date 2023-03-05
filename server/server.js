const express = require('express')
const app = express()
const PORT = process.env.Port || 3000;

app.get('/', (req, res) => {
  res.send('Hello People!')
})

app.get("/ping",(req,res) => {
    res.send("pong");
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(BUILD_PATH, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
}) 