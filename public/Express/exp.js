var express=require('express');

var app=express();

app.get('/',function(req,res){   // http method get,post,delete,put

        res.send('hi anaas this the first express exp of my in my life'); 
});

app.get('/api',function(req,res){  
    res.send('this api page');
});
// route with parametre
 //param string
app.get('/path/:name', function(req, res) { // url: /path/test
    res.send('here the parametre that you send it in url : '+req.params.name);  
  });
  // param number
app.get('/path/:id', function(req, res) { // url: /path/test
    res.send('here the parametre that you send it in url : '+req.params.id);  
  });

  //send view in route
  app.get('/test',function(req,res){
    res.sendFile(__dirname+'/test.html');
  });

app.listen('3000');  //add port  127.0.0.1:3000


