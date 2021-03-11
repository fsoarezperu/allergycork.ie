
const express=require('express');
const exphbs = require('express-handlebars');
const app=express();
const path = require('path');
var httpx = require('http').Server(app);
const io = require('socket.io')(httpx, { cookie: false });
const chalk=require('chalk');

app.use(express.static(__dirname + '/public'));
app.use('/images', express.static(__dirname + '/public/images/'));
app.use('/', express.static(__dirname + '/'));
app.use(require(__dirname + '/routes'));

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'main',extname: '.hbs'}));
app.set('view engine', '.hbs');

io.on('connect', async function(socket) {
  console.log(chalk.cyan("the client ID"+socket.id+" is connected from ip:"+socket.handshake.address));
  socket.on('disconnect', function(reason) {
    console.log(chalk.yellow("a user leave, reason:"+ chalk.cyan(reason)));

  });

    });
app.set('port', process.env.PORT || 3000);
app.listen(process.env.PORT,()=>{
  console.log("server started on port 3000");

})
module.exports.io=io;
