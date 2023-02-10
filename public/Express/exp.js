var express=require('express');

var app=express();

app.get('/',function(req,res){   // http method get,post,delete,put

        res.send('hi anaas this the first express exp of my in my life'); 
});

app.get('/api',function(req,res){  
    res.send('this api page');
});
app.listen('3000');  //add port  127.0.0.1:3000


