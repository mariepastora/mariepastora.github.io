d3.select("#g-en_sp_all-Plan_de_travail").style("opacity", 0)
  				.transition().delay(400).duration(900).ease(d3.easeLinear).style("opacity", 1)


    d3.select("#first-step")
      .on('stepin', function(){
        console.log("I was stepped into!")

      	d3.select("#g-en_sp_all-Plan_de_travail")
				.attr("src", "en_sp_all-Plan_de_travail_1.jpg")

      })


    d3.select("#second-step")
      .on('stepin', function(){
        console.log("I was stepped into!")

      	d3.select("#g-en_sp_all-Plan_de_travail")
				.attr("src", "alllang-Plan_de_travail_7.jpg")

      })

    d3.select("#third-step")
      .on('stepin', function(){
		d3.select("#g-en_sp_all-Plan_de_travail")
						.attr("src", "alllang-Plan_de_travail_6.jpg")
        console.log("I was stepped into!")
      })


    d3.select("#fourth-step")
      .on('stepin', function(){
		d3.select("#g-en_sp_all-Plan_de_travail")
						.attr("src", "greek-Plan_de_travail_1.jpg")
        console.log("I was stepped into!")
      })