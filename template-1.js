// Big map at the beginning but it resizes when changing size of screen
// Not the data though, which makes it super ugly when resized except if you refresh the page

(function () {

  var margin = {top: 10, left: 10, bottom: 10, right: 10}
  , width = parseInt(d3.select('#map').style('width'))
  , width = width - margin.left - margin.right
  , mapRatio = .5
  , height = width * mapRatio;

  // Create the SVG

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

  var map = d3.select('#map').append('svg')
      .style('height', height + 'px')
      .style('width', width + 'px');

  d3.select(window).on('resize', resize);

  // Tip

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return d.Plant_Name + '<br/>' + Math.round(d.Total_MW) + "MW"
    })

  map.call(tip)

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

    window.states = states

    map.selectAll(".states")
      .data(states)
      .enter().append("path")
      .attr("class", "states")
      .attr("d", path)

    map.selectAll(".powerplants")
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

  }

  // Resize function

  function resize() {
    width = parseInt(d3.select('#map').style('width'));
    width = width - margin.left - margin.right;
    height = width * mapRatio

    // update projection
    projection
        .translate([width / 2, height / 2])
        .scale(width)

    // resize the map container
    map
      .style('width', width + 'px')
      .style('height', height + 'px')

    // resize the map
    map.selectAll('.states').attr('d', path)
  }

})()






