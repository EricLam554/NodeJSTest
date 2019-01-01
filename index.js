var http = require('http')
var url = require('url')

http.createServer(onRequest).listen(process.env.PORT || 1337);
console.log('Server has started');

function onRequest(request, response){
  var pathName = url.parse(request.url).pathname
  console.log('pathname' + pathName);
  showPage(response, pathName)
}

var contentMap = {
 '/': '<h1>Welcome to the site</h1>',
 '/contact' : '<h1> Contact Page</h1>'
}

function showPage(response, pathName){
  if(pathName === '/'){
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write(contentMap['/']);
    response.end();
   }else {
    response.writeHead(404, {'Content-Type': 'text/html'})
    response.write('404 Page not found');
    response.end();
  }
}
