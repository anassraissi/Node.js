var http=require('http');
var fs=require('fs');
        // 9ra fichier wafichih fconsole
var MyReadStream=fs.createReadStream(__dirname +'/file_to_read.txt','utf-8');
MyReadStream.on('data',function(chunk){   //mnin tji data siftha l console log waafuchiha
        console.log('new chunk recieved');
        console.log(chunk);
})


