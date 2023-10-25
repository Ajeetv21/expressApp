var express = require('express');
var router = express.Router();

/* GET home page. */
var task = [
  
];

router.get('/', function(req, res, next) {
  res.render('index',);
});
router.get('/create', function(req, res, next) {
  res.render('create');
});

router.get('/tasks', function(req, res, next) {
  res.render('tasks',{task});
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.post('/create', function(req, res, next) {
  let data=req.body
  // res.json(req.body)  
  task.push(data)
  res.redirect("/tasks")
});
router.get("/delete/:index", function (req, res, next) {
  const index =req.params.index;
  // res.json(req.params.index)
  task.splice(index, 1);
  res.redirect("/tasks");
});
router.get("/update/:index", function (req, res, next) {
  const index =req.params.index;
  // task[index]=
   const tasks = task[index];
  res.render("update", {
      index,tasks 
  });
  // index:req.params.index
  // tasks:task.req.body
});

 router.post("/update/:index", function (req, res, next) {
  // const index =req.params.index;
  // const taskIndex=task.findIndex(t=>t.index===index)
  // task[taskIndex]=req.body;
  //  console.log(task)
  task[req.params.index] = req.body
  res.redirect("/tasks",)
});
module.exports = router;
