
    d3.select("#first-step")
      .on('stepin', function(){
        console.log("I was stepped into!")
      })

    d3.select("#second-step")
      .on('stepin', function(){

        console.log("I was stepped into!")
      })
