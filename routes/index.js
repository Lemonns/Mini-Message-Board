var express = require('express');
var router = express.Router();

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form')
})

router.post('/new', (req, res, next) => {
 
  if (req.body.messageText && req.body.userText) {
    messages.push({text: req.body.messageText, user: req.body.userText, added: new Date()})
  } else {
    console.log("Nothing added")
  }
  //console.log(messages)
  res.redirect('/');
})

module.exports = router;
