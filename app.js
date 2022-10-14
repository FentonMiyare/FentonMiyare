let express = require('express');
let bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
let app = express();

const path = require('path');
let PORT = process.env.PORT || 8080;

// Set directory to contain the 
// templates ('views')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json()); 
let urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(upload.array()); 


app.use(express.static('assets'));

// (static() is the only middleware 
//	function that is actually part of 
//Express). 

	
// GET
app.get('/', function(req, res){
	 res.render('index', { title: 'HOME'});
	});
	
app.get('/about', function(req, res){
	 res.render('about', { title: 'ABOUT'});
	});
	
app.get('/contact', function(req, res){
	// Query Strings e.g
	 console.log(req.query);
	 res.render('contact', { title: 'CONTACT', qs: req.query });
	});
	
app.get('/faq', function(req, res){
	 res.render('faq', { title: 'FAQ'});
	});

app.get('/project', function(req, res){
	 res.render('project', { title: 'PROJECT'});
	});
	
app.get('/services', function(req, res){
	 res.render('services', { title: 'Services'});
	});
	
app.get('/privacy_policy', function(req, res){
	 res.render('privacy_policy', { title: 'Privacy Policy'});
	});
	
app.get('/terms', function(req, res){
	 res.render('terms', { title: 'Terms'});
	});
	
	
	// POST
/*
app.post('/submit-form', urlencodedParser, function(req, res){
	 // Handling POST Request
	 console.log(req.body);
	 //res.render('index', {data: req.body, title: 'Home'});
	 const { name, email, subject, feedback } = req.body;
    console.log('Data: ', req.body);
});
*/	

const server = app.listen(PORT, () => {
	console.log('listening on port: http://localhost:%s', server.address().port);
});

//for cookies and Helmet - For 
//secure HTTP requests, install: 
//npm install helmet cookie-parser
