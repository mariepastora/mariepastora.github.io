(function () {

  // Create the SVG

  var margin = { top: 0, right: 0, bottom: 0, left: 0 }

  var width = 1000 - margin.left - margin.right,
      height = 650 - margin.top - margin.bottom

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
    .scale(1300)

  var path = d3.geoPath()
    .projection(projection)

  // Tip

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return d.Plant_Name + '<br/>' + Math.round(d.Total_MW) + "MW"
    })

  svg.call(tip)

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
      .on('mouseover', function(d){
        tip.show(d)
        d3.select(this).classed("circle_selected", true)
      })
      .on('mouseout', function(d){
        tip.hide(d)
        d3.select(this).classed("circle_selected", false)
      })

    // Buttons

    d3.select("#reset-button")
      .on("click", function(){
        svg.selectAll('circle')
          .attr('fill', function(d){
            return colorScale(d.PrimSource)
            }
          )
      })   

    d3.select("#hydroelectric-button")
      .on("click", function(){
        svg.selectAll('circle')
          .attr('fill', function(d){
            if(d.PrimSource === "hydroelectric"){
              return colorScale("hydroelectric")
            }
            else{
              return "transparent"
            }
          })

          // Tips not showing for transparent circles but if circle under transparent one, tip won't show

          .on('mouseover', function(d){
            if (d.PrimSource === "hydroelectric"){
            tip.show(d) 
            d3.select(this).classed("circle_selected", true)             
            }
            else {
              tip.hide(d)
            }
          })
          .on('mouseout', function(d){
            tip.hide(d)
            d3.select(this).classed("circle_selected", false)
          })
      })

    d3.select("#nuclear-button")
      .on("click", function(){
        svg.selectAll('circle')
          .attr('fill', function(d){
            if(d.PrimSource === "nuclear"){
              return colorScale("nuclear")
            }
            else{
              return "transparent"
            }
          })
          .on('mouseover', function(d){
            if (d.PrimSource === "nuclear"){
            tip.show(d) 
            d3.select(this).classed("circle_selected", true)             
            }
            else {
              tip.hide(d)
            }
          })
          .on('mouseout', function(d){
            tip.hide(d)
            d3.select(this).classed("circle_selected", false)
          })
      })  

    d3.select("#wind-button")
      .on("click", function(){
        svg.selectAll('circle')
          .attr('fill', function(d){
            if(d.PrimSource === "wind"){
              return colorScale("wind")
            }
            else{
              return "transparent"
            }
          })
          .on('mouseover', function(d){
            if (d.PrimSource === "wind"){
            tip.show(d) 
            d3.select(this).classed("circle_selected", true)             
            }
            else {
              tip.hide(d)
            }
          })
          .on('mouseout', function(d){
            tip.hide(d)
            d3.select(this).classed("circle_selected", false)
          })
      })

    d3.select("#solar-button")
      .on("click", function(){
        svg.selectAll('circle')
          .attr('fill', function(d){
            if(d.PrimSource === "solar"){
              return colorScale("solar")
            }
            else{
              return "transparent"
            }
          })
          .on('mouseover', function(d){
            if (d.PrimSource === "solar"){
            tip.show(d) 
            d3.select(this).classed("circle_selected", true)             
            }
            else {
              tip.hide(d)
            }
          })
          .on('mouseout', function(d){
            tip.hide(d)
            d3.select(this).classed("circle_selected", false)
          })
      })  

    d3.select("#naturalgas-button")
      .on("click", function(){
        svg.selectAll('circle')
          .attr('fill', function(d){
            if(d.PrimSource === "natural gas"){
              return colorScale("natural gas")
            }
            else{
              return "transparent"
            }
          })
          .on('mouseover', function(d){
            if (d.PrimSource === "natural gas"){
            tip.show(d) 
            d3.select(this).classed("circle_selected", true)             
            }
            else {
              tip.hide(d)
            }
          })
          .on('mouseout', function(d){
            tip.hide(d)
            d3.select(this).classed("circle_selected", false)
          })
      })  

    d3.select("#coal-button")
      .on("click", function(){
        svg.selectAll('circle')
          .attr('fill', function(d){
            if(d.PrimSource === "coal"){
              return colorScale("coal")
            }
            else{
              return "transparent"
            }
          })
          .on('mouseover', function(d){
            if (d.PrimSource === "coal"){
            tip.show(d) 
            d3.select(this).classed("circle_selected", true)             
            }
            else {
              tip.hide(d)
            }
          })
          .on('mouseout', function(d){
            tip.hide(d)
            d3.select(this).classed("circle_selected", false)
          })
      }) 

  }

})()






