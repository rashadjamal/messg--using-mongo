const mongoose = require('mongoose');
const Chat = require('./models/chat');

main().then(()=>{
    console.log("connection successful")
 })
 .catch(err => console.log(err));
 
 async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
 } 


  let allChats = ([
    {
    from: "rahsad",
    to: "king",
    msg:"how are you",
    created_at: new Date(),
  },
  {
    from:"rohit",
    to:"mohit",
    msg:"teach me js callback",
    created_at: new Date(),
  },
  {
    from:"anita",
    to:"ramesh",
    msg:"bring me some foods",
    created_at: new Date(),
  },
  {
    from:"tony",
    to:"pater",
    msg:"love you 300",
    created_at: new Date(),
  },
  ]);
   
  Chat.insertMany(allChats);