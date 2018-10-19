var Twit = require('twit')
 
var T = new Twit({
  consumer_key: 'Fgk9PJpkkKQk44KQ0CCgGrWVh',  
  consumer_secret: 'YlgatwdBmk8ZxjcFr7o7eR8v7BxD6QAogGG121CNKaGHZ5wdEa',
  access_token: '961742470278209536-MjtseOpxTmXYGhqijIropj0feFSmaE1',  
  access_token_secret: 'gHkDTb5nOTkT57F3KEAtk2E0AtHtemKawVWb48jk8XyQF'
  //timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  //strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
 
//
//  tweet 'hello world!'
//
T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})