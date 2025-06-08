let server;

before(function() {
  let students = [
    {"name" : "Steve", "email" : "steve@gmail.com"},
    {"name" : "Tina", "email" : "tina@yahoo.com"}
  ];
  const express = require('express');
  const app = express();
  server = require('http').createServer(app);
  app.set('view engine', 'pug');
  app.use(require('body-parser')
    .urlencoded({extended:true}));
  const studentsController = 
    require("../controllers/students-controller");
  studentsController.setup(app, students);
  server.listen(8888);
});

after(function() {
  server.close();
});
