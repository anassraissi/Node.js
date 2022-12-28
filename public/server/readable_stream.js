var http=require('http');
var fs=require('fs');
        // 9ra fichier wafichih fconsole
var MyReadStream=fs.createReadStream(__dirname +'/file_to_read.txt','utf-8');  // create read stream 
var MyWriteStream=fs.createWriteStream(__dirname +'/read_file.txt');    // create write stream


// instead of sending data by the method 

// MyReadStream.on('data',function(chunk){   //mnin tji data 3amar fichier read_file
//         var MyWriteStream=fs.createWriteStream(__dirname +'/read_file.txt');
//                 console.log('fill the file read_file.txt ');
        
//                 MyWriteStream.write(chunk);  // ktab data chank
        
//         })
        
// we can so esely

MyReadStream.pipe(MyWriteStream);  //  pipe has a perpus send from readstrem to writestream.












