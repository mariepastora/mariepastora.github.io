// From all powerlpants to Coal powerplants map + D3 Steps for sticky map

(function () {

  // Create the SVG

  var margin = { top: 0, right: 0, bottom: 0, left: 0 }

  var width = 700 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom

  // You'll probably need to edit this one

  var svg = d3.select("#chart").append("svg")
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
        return colorScale(d.PrimSource)
      })

    // D3 steps: all powerplants

    d3.select("#second-step")
    .on('stepin', function(){
      svg.selectAll('circle')
        .transition()
        .duration(400)
        .attr('fill', function(d){
          return colorScale(d.PrimSource)
        })
    })

    // D3 steps: from all to coal

    d3.select("#third-step")
    .on('stepin', function(){
      svg.selectAll('circle')
      .transition()
      .duration(750)
        .attr('fill', function(d){
          if(d.PrimSource === "coal"){
            return colorScale("coal")
          }
          else{
            return "transparent"
          }
        })
      svg.selectAll("circle")
    })

    // From coal to natural gas

    d3.select("#fourth-step")
    .on('stepin', function(){
      svg.selectAll('circle')
      .transition()
      .duration(750)
        .attr('fill', function(d){
          if(d.PrimSource === "natural gas"){
            return colorScale("natural gas")
          }
          else{
            return "transparent"
          }
        })
      svg.selectAll("circle")
    })

    // From natural gas to nuclear

    d3.select("#fifth-step")
    .on('stepin', function(){
      svg.selectAll('circle')
      .transition()
      .duration(750)
        .attr('fill', function(d){
          if(d.PrimSource === "nuclear"){
            return colorScale("nuclear")
          }
          else{
            return "transparent"
          }
        })
      svg.selectAll("circle")
    })



   


}

})()

