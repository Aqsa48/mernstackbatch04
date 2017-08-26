const express =require('express')
const next =require('next')
const mongoose =require('mongoose')
const bodyParser=require('body-parser')
const passport=require('passport')
const cookieParser =require('cookie-parser')
const session =require('express-session')


// for the Local DB Connection
const secret = require('./config/secret')
const User=require('./models/user')
//
const Admin=require('./models/admin')
const Webmaster=require('./models/webmaster')
const passportConfi=require('./config/passport')

// Node Rsa Library For Encrption and decryption
 var NodeRSA = require('node-rsa');
 var key = new NodeRSA({b: 512});

const dev=process.env.NODE_ENV !=='production'
const app=next ({dev})
const handle=app.getRequestHandler()

//Connection to DB
mongoose.connect(secret.database,(err)=>{
    if(err){console.error(err)}
    else{console.log("DataBase Connected--")}
})

   //MIDDLEWARE
app.prepare()
.then(() => {
  const server = express()

   //MIDDLEWARE
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({extended: false}))
  server.use(cookieParser())    
  server.use(session({
    secret: process.env.SESSION_SECRET || secret.key,
    resave: true,
    saveUninitialized: false
  }))
  server.use(passport.initialize())
  server.use(passport.session())

  server.get('/',(req,res)=>{
   if(req.user){

          console.log('+++'+req.user);
          
          app.render(req,res,'/showIndex',req.query);

      }else{
          res.redirect('/index');
      }
  })


// main get route
  server.get('/getuser',(req,res)=>{
      res.json(req.user);
  })

  server.post('/login',passport.authenticate('user',{failureRedirect:'/login'}),(req,res) => {
    console.log('+++'+req.user);
  
    var encrypted = key.encrypt(req.user, 'base64');
    console.log(encrypted);
    fs.writeFileSync('./config/userinfo.info',encrypted);
      res.redirect('/showIndex');
  })

  server.post('/admin',passport.authenticate('admin',{failureRedirect:'/admin'}),(req,res) => {
    var encrypted = key.encrypt(req.user, 'base64');
    console.log(encrypted);   
    fs.writeFileSync('./config/userinfo.info',encrypted);
      res.redirect('/showIndex');
  })
  
  server.post('/webmaster',passport.authenticate('webmaster',{failureRedirect:'/webmaster'}),(req,res) => {
    var encrypted = key.encrypt(req.user, 'base64');
    console.log(encrypted);
    fs.writeFileSync('./config/userinfo.info',encrypted);
    console.log('+++'+req.user);
      res.redirect('/showIndex');
  })

    server.get('/userinfo',(req,res)=>{
        var encrypted = fs.readFileSync('./config/userinfo.info','utf-8');
        var decrypted = key.decrypt(encrypted, 'utf8');
        console.log(decrypted);
        res.json(decrypted);
    })

  server.post('/signup',(req,res) => {
      var user = new User();
      user.username = req.body.username;
      user.password = req.body.password;
      user.accType='user1';
 
      user.save((err,user) => {
          if(err){console.error("Error: ", err)}
          else{res.redirect('/user')}
      })
  })


// route for adding new Admin
  server.post('/signupadmin',(req,res) => {
      var admin= new Admin();
      admin.username = req.body.username;
      admin.password = req.body.password;
    admin.accType='admin';
 
      admin.save((err,user) => {
          if(err){console.error("Error: ", err)}
          else{res.redirect('/addAdmin')}
      })
  })

// route for adding new Webmaster
  server.post('/signupweb',(req,res) => {
      var admin= new Webmaster();
      admin.username = req.body.username;
      admin.password = req.body.password;
     admin.accType='web';
 
      admin.save((err,user) => {
          if(err){console.error("Error: ", err)}
          else{res.redirect('/addWebmaster')}
      })
  })







  
    server.get('/logout',(req,res)=>{
      if(req.user){
          req.logout();
          res.redirect('/index');
      }else{
          res.redirect('/index');
      }
  })


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
