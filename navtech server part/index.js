var express =require("express");
var app=express();
app.get('./',(req,res)=>{
    res.send("Success");
})
app.get("/login/:uname/:upwd",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    var uname=req.params.uname;
    var upwd=req.params.upwd;
    if(uname=="navtech" && upwd=="Navtech1"){
        res.send({"login":"success"});
    }else{
        res.send({"logout":"fail"});
    }
});
app.listen(8080);
console.log("Server Started");