var fs=require('fs');
var http=require('http');


var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'application/json'});  //how browser understund json file
    var obj={
        name:'Raissi',
        Age:'29',
        fonction:'noting serious'
    }
    res.end(JSON.stringify(obj));
}).listen(3000,'127.0.0.1');
console.log('open the url in browser');