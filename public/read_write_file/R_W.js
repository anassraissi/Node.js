var fs=require('fs');
// fs class for reading and writing files
// var readme =fs.readFileSync('readme.txt','utf-8');  // name file,encoding 
// // fs.readFileSync() methode sync for read file => blocking site

// console.log(readme);

// // //write file
// fs.writeFileSync('writeMe.txt',readme);  //name_file,data send


//read file as async ==> no block site

// fs.readFile('readme.txt','utf-8',function(error,data){
//     console.log(data);
// });
    
    // when reading file create a file ==> asynchrone
fs.readFile('readme.txt','utf-8',function(error,data){
    console.log(data);
    fs.writeFile("write2.txt",data,"utf-8",(err)=>{
        if (err) throw err;
        else console.log("mziane");
    });    
});
console.log('hi anass');
