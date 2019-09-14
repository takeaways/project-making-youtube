import express from "express";
const app = express();
app.get("/", function(req, res){
  res.send('welcome~~ ')
})

const PORT = process.env.PORT || 4000
const handlerListening = () => console.log(`Listening on : http://localhost/${PORT}`);

app.listen(PORT, handlerListening);
