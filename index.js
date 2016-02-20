var tty = require('tty.js');
var express = require('express');
var directory = require('serve-index');
var cors = require('cors');

var app = tty.createServer({
  shell: 'bash',
  users: {
    posm: 'posm'
  },
  port: 4321
});

// Enable CORS always.
app.use(cors());

app.use('/posm-console/pages', express.static(__dirname + '/pages'));
app.use('/posm-console/pages', directory(__dirname + '/pages'));

app.get('/test', function(req, res, next) {
  res.send('bar');
});

app.listen();
