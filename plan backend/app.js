const express= require('express');
var app= new express();
const chalk=require('chalk');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path');
const PlanData=require('./src/model/PlanData');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));




const signupRouter=require('./src/routs/signupRouter')();
const loginRouter=require('./src/routs/loginRouter')();
const adminloginRouter=require('./src/routs/adminloginRouter')();










app.use(express.static(path.join(__dirname,"/public")));


app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/adminlogin',adminloginRouter);


mongoose.connect('mongodb+srv://surya:surya@cluster0-4o3vw.mongodb.net/test?retryWrites=true&w=majority');



app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var product = {       
        name : req.body.product.name,
        organisation : req.body.product.organisation,

        address : req.body.product.address,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl,
   }       
   var product =new PlanData(product);
   product.save();
});
app.get('/product',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    PlanData.find()
                .then(function(products){
                    res.send(products);
                });
});

app.post('/delete',(req,res)=>{
    PlanData.findByIdAndDelete(req.body.id,(error,data)=>{
        if(error){
            res.json({"status":"Error"});
            throw error;
        }
        else{
           res.json({status:"Success"})
        }
    })
})

app.post('/update',(req,res)=>{
    PlanData.findByIdAndUpdate(req.body._id,{$set:req.body},
        (err,result)=>{
            if(err){
                res.json({status:"Error"});
            }
            else{
                res.json({status:"Success"})
            }
        })
})



app.listen(3000, function(){
    console.log("listening to port "+chalk.green('3000'));
});

