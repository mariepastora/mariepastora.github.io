console.log("Type the Konami code on your keyboard! I mean, click out of the console first, anywhere on the page that's not a link. And then the Konami code is up,up,down,down,left,right,left,right,b,a ")

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
      }, 7000)
    })
  }
)
egg
  .addHook(function() {
    console.log("Yay, right combination, ain't that great.")
    console.log("But I'm actually dead serious you should 100% send me an email (by clicking on the pink enveloppe?? Just a suggestion, I don't know.)")
    console.log("AND if you do the Konami code but REVERSED you'll get something even more useless!")
  })
egg.listen()

var egg2 = new Egg()
egg2.addCode(
  'a, b, right, left, right, left, down, down, up, up ',
  function() {
    jQuery('#egggif2').fadeIn(500, function() {
      window.setTimeout(function() {
        jQuery('#egggif2').hide()
      }, 6000)
    })
  }
)
egg2
  .addHook(function() {
    console.log("That's it for easter eggs I guess, but I take suggestions.")
  })
egg2.listen()

// animating egg

var tl2 = new TimelineMax({ repeat: 200, repeatDelay: 0, yoyo: true })

tl2.to(document.getElementById('egggif2'), 5, {
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




