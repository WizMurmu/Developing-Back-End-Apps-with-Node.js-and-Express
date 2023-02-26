// const express = require("express");
// const app = express();
// const port = 3000;
// app.get("/", function (req, res) {
// res.send("Hello World!");
// });
// app.listen(port, function () {
// console.log(`Example app listening on 
// port ${port}!`);
// });

const express = require("express");
const path = require("path") 
const http = require("http"); 
const app = express(); 
const server = http.Server(app);

// Configuration 
server.listen(process.env.PORT || 8000, () => { 
console.log(`[ server.js ] Listening on port 
${server.address().port}`);
app.get('/edit',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/edit.html'));
})
app.get('/show',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/show.html'));
})  

});

