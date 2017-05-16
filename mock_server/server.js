var restify = require('restify');
 
var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
 
server.get('/login', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({
    token: 'sdsdsd'
  });
  return next();
});
 
server.listen(1337, function () {
  console.log('%s listening at %s', server.name, server.url);
});