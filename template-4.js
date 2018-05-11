// Wind powerplants map + D3 steps for sticky text

(function () {

  // Create the SVG

  var margin = { top: 0, right: 0, bottom: 0, left: 0 }

  var width = 700 - margin.left - margin.right,
      height = 900 - margin.top - margin.bottom

  // You'll probably need to edit this one

  var svg = d3.select("#chart-3").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  // Queue

  d3.queue()
    .defer(d3.json, "us_states.topojson")
    .defer(d3.csv, "powerplants.csv")
    .await(ready)

  // Projection

  var projection = d3.geoAlbersUsa()
    .translate([width/2, height/2])
    .scale(width)

  var path = d3.geoPath()
    .projection(projection)


  // Scales

  var radiusScale = d3.scaleSqrt()
    .domain([0,8000])
    .range([0,35])

  var colorScale = d3.scaleOrdinal()
    .domain(["hydroelectric", "natural gas", "coal", "petroleum", "pumped storage", "geothermal", "nuclear", "wind", "solar"])
    .range(["#2D81C5","#F08A33", "#98969A", "#EA3F33", "#FDEFD7", "#FDEFD7", "#D04A9A", "#5AB24D", "#D8CA44" ])

  // Create function

  function ready(error, states, powerplants) {
    if(error) {
      console.log("Had an error, exiting")
      return
    }

    var states = topojson.feature(states, states.objects.us_states).features

    svg.selectAll(".states")
      .data(states)
      .enter().append("path")
      .attr("class", "states")
      .attr("d", path)

    svg.selectAll(".powerplants")
      .data(powerplants)
      .enter().append("circle")
      .attr("class", "powerplants")
      .attr("r",function(d){
        return radiusScale(d.Total_MW)
      })
      .attr("cx", function(d){
        var coords = projection([d.longitude, d.latitude])
        return coords[0]
      })
      .attr("cy", function(d){
        var coords = projection([d.longitude, d.latitude])
        return coords[1]
      })
      .attr("fill", function(d){
        if(d.PrimSource==="wind"){
          return colorScale("wind")
        }
        else{
          return "transparent"
        }
      })

      // Handling all steps with sticky text and scrolling d3 maps
      // Changes text aspect of sticky text

      d3.select("#sixth-step")
      .on('stepin', function(){
      document.getElementById("oil-1").setAttribute("style", "color:#ff6666;")
      document.getElementById("oil-2").setAttribute("style", "color:#ff6666; font-weight:bold")
      })
      .on('stepout', function(){
      document.getElementById("oil-1").setAttribute("style", "background-color:transparent")
      document.getElementById("oil-2").setAttribute("style", "background-color:transparent")    
      })

      d3.select("#seventh-step")
      .on('stepin', function(){
      document.getElementById("wind-1").setAttribute("style", "color:#5AB24D;")
      document.getElementById("wind-2").setAttribute("style", "color:#5AB24D; font-weight:bold")
      })
      .on('stepout', function(){
      document.getElementById("wind-1").setAttribute("style", "background-color:transparent")
      document.getElementById("wind-2").setAttribute("style", "background-color:transparent")
      })

      d3.select("#eigth-step")
      .on('stepin', function(){
      document.getElementById("solar-1").setAttribute("style", "color:#D8CA44;")
      document.getElementById("solar-2").setAttribute("style", "color:#D8CA44; font-weight:bold")
      })
      .on('stepout', function(){
      document.getElementById("solar-1").setAttribute("style", "background-color:transparent")
      document.getElementById("solar-2").setAttribute("style", "background-color:transparent")
      })

  }

})()

