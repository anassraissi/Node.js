var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req,res){
    if(req.url=="/" || req.url=='/home'){
        res.writeHead(200,{'Content-type':'text/html'});  
        fs.createReadStream(__dirname+'/home.html').pipe(res);
        console.log('yes');   
    }
    else if(req.url=='/contact'){
        res.writeHead(200,{'Content-type':'text/html'});  
        fs.createReadStream(__dirname+'/contact.html').pipe(res); 
    }
    else if(req.url=="/api"){
        res.writeHead(200,{'Content-type':'application/json'});  
        var obj=[{name:'Raissi Anass',age:23},{name:'no one',age:12}];
        res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(200,{'Content-type':'text/html'});  
        fs.createReadStream(__dirname+'/404_err.html').pipe(res);
    }
    
    console.log('the request was made  : '+req.url)   

});
server.listen(3000,'127.0.0.1');
// server.close();

console.log('open the browser with this url 127.0.0.1:3000');


