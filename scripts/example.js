function fireproxy(){
var http = require('http');
//var url = require('url');
//var request = require('request');

var server = http.createServer(onRequest).listen(3000);

function onRequest() {

      var Twit = require('twit')

      var T = new Twit({
        consumer_key: 'ZvJzIkWUVOTCD1uqx1LI6lxvv',
        consumer_secret: 'jjJ0iUVCZubnyBPu62GoxmWmc8XtoiEyroSyy1ax56csUBH1aQ',
        access_token: '961742470278209536-JTOT9kCBaEJ5t4lmzgxtKZkEGIk40zc',
        access_token_secret: '1GVEYDJRdXpq8B6TyATAwvwfSJUgzauwHCTqhvR6Jovg9',
        timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
        //strictSSL: true // optional - requires SSL certificates to be valid.
      })

      var quotes = [
      "I did a bare ass 360 triple back flip in front of twenty two thousand people. It's kind of funny, it's on Youtube, check it out. But when my dad got sick, I did something way crazier than that.",
      "That's funny, my name's Roger. Two Rogers don't make a right!",
      "Did I ever tell ya that this here jacket represents a symbol of my individuality, and my belief in personal freedom?",
      "Well, I'm one of those fortunate people who like my job, sir. Got my first chemistry set when I was seven, blew my eyebrows off, we never saw the cat again, been into it ever since.Well, I'm one of those fortunate people who like my job, sir. Got my first chemistry set when I was seven, blew my eyebrows off, we never saw the cat again, been into it ever since.",
      "Put... the bunny... back... in the box.",
      "What's in the bag? A shark or something?",
      "Sorry boss, but there's only two men I trust. One of them's me. The other's not you.",
      "Only if it's a noun, and the words have equal weight. Like, Homeland Security. If it's a participle modifying the first word, then... you better keep it lower case.",
      "What do you think I'm gonna do? I'm gonna save the fuckin' day!",
      "You don't have a lucky crack pipe?",
      "Guns and wine. Naughty priests.",
      "Man: Fuck you, trailer trash!",
      "Killing me won’t bring back your god damn honey!",
      "Well, Baby-O, it's not exactly mai-thais and yatzee out here but... let's do it!",
      "You'll be seeing a lot of changes around here. Papa's got a brand new bag.",
      "Shoot him again... His soul's still dancing."
      ]
      //
      //  tweet 'hello world!'
      //
      T.post('statuses/update', { status: quotes[Math.floor(Math.random()*quotes.length)] }, function(
        err,
        data,
        response
      ) {
        console.log(data)
      })
}

server.setTimeout(7000)

}
