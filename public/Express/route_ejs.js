var express=require('express');

var app=express();
const router = express.Router();
var bodyParser = require('body-parser')
var urlencodedParser=bodyParser.urlencoded({extended : false});

app.set('view engine', 'ejs');
// must add folder that name views 

app.use('/assets',express.static('assets'));



// send reel data and parametre to profile  
app.get('/profile/:name',function(req,res){  
    
    var data ={ age: 29, job: 'nothing intresting',hobbies:['Soccer','Swiming','Tenis']};
        res.render('profile',{get_param:req.params.name,data:data});
});
app.get('/',function(req,res){  
    
        res.render('index');
});

app.get('/',function(req,res){  
    
        res.render('index');
});
app.post('/contact',urlencodedParser,function(req,res){  
        console.log(req.body);

        res.render('contact_succes',{data:req.body});
});
app.get('/contact',function(req,res){  

        res.render('Conatct',{query:req.query});
});
app.get('/profile',function(req,res){  
    
        res.render('profile1');
});

//midleware

// app.use('/assets',express.static(path.join(__dirname, 'public/assests')));

app.listen('3000');
