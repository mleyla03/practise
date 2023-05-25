const express = require('express')
const cors=require('cors')
const app = express()
const port = 8030
const bodyParser=require('body-parser')
const mongoose = require('mongoose');

app.use(cors())
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

const Sayt= new mongoose.Schema({
    names:String,
    title:String
 
})
const Pro = new mongoose.model('Pro',Sayt);
app.get("/api/lazim",async(req,res)=>{
    const { names } = req.query;
    const linksss = await Pro.find();
    if (!names) {
      res.status(200).send(linksss);
    } else {
      const searched = linksss.filter((x) =>
        x.names.toLowerCase().trim().includes(names.toLowerCase().trim())
      );
      res.status(200).send(searched);
    }
})
app.get("/api/lazim/:id",async(req,res)=>{
    const id=req.params.id
    const sayts= await new Pro.findById(id)
    res.send(sayts)
})
app.post("/api/lazim",async(req,res)=>{
    const{names,title} =req.body
    const Say= new Pro ({
        names:names,
        title:title


    })
   await Say.save()
    res.send(Say)

})
app.delete("/api/lazim/:id",async(req,res)=>{
    const id=req.params.id
    const deleted = await Pro.findByIdAndDelete(id);
   
    res.send(deleted)
 })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect('mongodb+srv://mleyla:lyla2003@authors.08rrrds.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Mongo DB connected!");
  });