const mogoose=require("mongoose");
const config=require("./config");

const dbURL=config.db.url;
mogoose.connect(dbURL)
.then(()=>{
  console.log("Mongodb Atlas is connected.")  
})
.catch((error)=>{
  console.log(error)
})