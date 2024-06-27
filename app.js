const express=require("express");
const cors=require("cors");
require("./config/db")
const app=express();
const userRouter=require("./routes/user.route")

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api/users",userRouter)

// api/users:GET
// api/users/id:GET
// api/users:POST
// api/users/:id:PATCH
// api/users/:id:DELETE

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/views/index.html")
  });
//route is not found error
app.use((req,res,next)=>{
  res.status(404).json({
   message:"route is not found" 
  })
});
//error for server
app.use((err,req,res,next)=>{
  res.status(500).json({
   message:"Something went wrong" 
  })
})

module.exports=app;