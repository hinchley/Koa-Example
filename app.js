var views = require('koa-render'),
    route = require('koa-route'),
    serve = require('koa-static'),
    parse = require('co-body'),
    koa   = require('koa');

var app = koa();

app.use(views(__dirname + '/views', 'hbs', { hbs: 'handlebars' }));
app.use(serve(__dirname + '/public'));

app.use(route.get('/', function *() {
  this.body = yield this.render('index', { text: 'stuff' });
}));

app.use(route.post('/', function *() {
  var body = yield parse.form(this);
  this.body = yield this.render('index', { text: body.input });
}));

app.listen(3000);