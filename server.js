//var cc          = require('config-multipaas'),
  var  restify     = require('restify'),
    	fs          = require('fs')

//var config      = cc(),
 var   app         = restify.createServer()

app.use(restify.queryParser())
app.use(restify.CORS())
app.use(restify.fullResponse())

// Routes
app.get('/status', function (req, res, next)
{
  res.send("{status: 'ok'}");
});

app.get('/', function (req, res, next)
{
  var data = fs.readFileSync(__dirname + '/index.html');
  res.status(200);
  res.header('Content-Type', 'text/html');
  res.end(data.toString().replace(/host:port/g, req.header('Host')));
});

app.get(/\/(css|js|img)\/?.*/, restify.serveStatic({directory: './static/'}));

app.listen(process.env.OPENSHIFT_INTERNAL_PORT, process.env.OPENSHIFT_INTERNAL_IP, function () {
  console.log( "Listening on " + process.env.OPENSHIFT_INTERNAL_IP + ", port " + process.env.OPENSHIFT_INTERNAL_PORT )
});
