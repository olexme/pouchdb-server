var cors       = require('cors'),
    express = require('express'),
    app     = express(),
    PouchDB = require('pouchdb').defaults({ prefix: ('dbs/') });


var allowCors = cors({
    origin: true,
    credentials: true
});
app.options("*", allowCors);

app.use(allowCors);
app.use('/db', require('express-pouchdb')(PouchDB));

new PouchDB('foo');

app.listen(1521);