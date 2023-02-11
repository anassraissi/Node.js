var express=require('express');

var app=express();
const router = express.Router();

app.set('view engine', 'ejs');
// must add folder that name views 

// send reel data and parametre to profile  
app.get('/profile/:name',function(req,res){  
    
    var data ={ age: 29, job: 'nothing intresting'};
        res.render('profile',{get_param:req.params.name,data:data});
});

app.listen('3000');