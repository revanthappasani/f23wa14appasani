var express = require('express');
var router = express.Router();
 
/* get HOME PAGE. */
router.get('/', function(req, res, next) {
  var x = req.query.x;
 
 
  if(x!=null){
    var rand=x;
  }
  else{
    var rand = Math.floor(Math.random()*100);
  }
 
  var hypot = Math.hypot(rand,0);
  var ceil = Math.ceil(rand);
  var clz32 = Math.clz32(rand);
  res.render('computation', {title: `Function hypot is applied to ${rand} is ${hypot},Function ceil is applied to ${rand} is ${ceil},Function clz32 is applied to ${rand} is ${clz32}` });
});
 
module.exports = router;