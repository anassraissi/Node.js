var http=require('http');  //module bach nt3amlo m3a server

var server=http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('i end of creating server anass');
        console.log('the request was made  : '+req.url)   // y3tina url ou  li mch li mcha server 
})
    // creana server w3tinah responce ok li hi 200 wgolnalih yjib m3ah response i end of creating server anass

server.listen(3000,'127.0.0.1');
console.log('now you listining to port 3000');

// golna lih ytsanat ghi port 3000 dyalna mn ba3d adress local bach matkharba9 3lih chghal
//  mn li request lokhrin li mach dyalna


