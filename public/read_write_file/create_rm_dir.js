var fs=require('fs');

// fs.mkdirSync('stuff');  create a folder
// fs.rmdirSync('stuff');   // Delete a folder

fs.mkdir('handel_file',function(){    // mnin tcree dosiier cree fichier smito new_write dir fih data dyal writeMe
    fs.readFile('writeMe.txt','utf-8',function(err,data){
        fs.writeFile('./handel_file/new_write.txt',data,(err)=>{
            if (err) console.log('err');
        });
    })
})

    // fs.unlink('./handel_file/new_write.txt',function(){  // mnin tmhi  fichier new_write mhi dossier handel_file
    //     fs.rmdir('handel_file',(err)=>{
    //         if (err) console.log('error');
    //     });
    // })




