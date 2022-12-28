var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'}); 

   //type html bach y3taf browser type dyal file 3la hsab lbalise wdakchi

    var MyReadStream=fs.createReadStream(__dirname +'/html_page.html','utf-8'); 
     // create read stream from file_to_read file
    MyReadStream.pipe(res);    
    //send data to server as result in the end in browser

    console.log('the request was made  : '+req.url)   // 
})

server.listen(3000,'127.0.0.1');
console.log('now you listining to port 3000');