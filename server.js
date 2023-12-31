const express = require('express')
const app = express()
const path = require('path');

let options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static(path.join(__dirname),'/build', options))
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname+"/build/index.html"));
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
})