// Making timeline
var tl = new TimelineMax({ repeatDelay: 20, repeat: 50 })
tl.to('.instruction-text', 1, { text: 'Hi,', ease: Linear.easeNone })
tl.to('.instruction-text-2', 3, {
  text: 'my name is Marie Patino',
  ease: Linear.easeNone
})

// TweenLite.to(".instruction-text", 3, {text:"Hi, my name is Marie Patino", ease:Linear.easeNone})

var egg = new Egg()
egg.addCode(
  'up,up,down,down,left,right,left,right,b,a',
  function() {
    jQuery('#egggif').fadeIn(500, function() {
      window.setTimeout(function() {
        jQuery('#egggif').hide()
      }, 6000);

      var Twit = require('twit')

      var T = new Twit({
        consumer_key: 'ZvJzIkWUVOTCD1uqx1LI6lxvv',
        consumer_secret: 'jjJ0iUVCZubnyBPu62GoxmWmc8XtoiEyroSyy1ax56csUBH1aQ',
        access_token: '961742470278209536-JTOT9kCBaEJ5t4lmzgxtKZkEGIk40zc',
        access_token_secret: '1GVEYDJRdXpq8B6TyATAwvwfSJUgzauwHCTqhvR6Jovg9',
        timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
        //strictSSL: true // optional - requires SSL certificates to be valid.
      })

      //
      //  tweet 'hello world!'
      //
      T.post('statuses/update', { status: 'Someone found that negg' }, function(
        err,
        data,
        response
      ) {
        console.log(data)
      })
    })
  },
  'YOU GOT CAGED'
)
egg.addHook(function() {
  console.log('Right combination:' + this.activeEgg.keys)
  console.log(this.activeEgg.metadata)
})
egg.listen()

// animating egg

var tl2 = new TimelineMax({ repeat: 200, repeatDelay: 0, yoyo: true })

tl2.to(document.getElementById('egggif'), 5, {
  bezier: {
    type: 'soft',
    values: [
      { x: 0, y: 100 },
      { x: 200, y: 200 },
      { x: 400, y: 300 },
      { x: 600, y: 100 }
    ],
    autoRotate: true
  },
  ease: Power1.easeInOut,
  repeat: 100,
  yoyo: true
})
