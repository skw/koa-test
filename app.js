var app = require( 'koa' )()
  , server = require( 'http' ).Server( app.callback() )
  , io = require( 'socket.io' ).listen( server )
  , views = require( 'koa-views' )
  , dust = require( 'dustjs-linkedin' )
;

app.use( views( __dirname + '/public/views', 'html', {
  html: dust.compile
}) );

console.log( dust );

io.on( 'connection', function() {
  console.log( 'connected' );
});

app.use( function *() {
  //this.body = 'Hello World';
  yield this.render( 'index', {
    test: 'tested'
  });
});

server.listen( 3000 );