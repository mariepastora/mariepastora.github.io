  var margin = { top: 0, right: 30, bottom: 50, left: 50 }

  var width = 900 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom


  var projection = d3.geoMercator()
        .center([-73.96667, 40.78333])
        .scale(46000)
        .translate([370, 190]);

  var path = d3.geoPath()
      .projection(projection);

  var svg_map = d3.select("#map-ldi").append("svg")
      .attr("width", width)
      .attr("height", height)
          .call(responsivefy)
     .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  d3.queue()
    .defer(d3.json, "geo_with_ldi.json")
    .await(ready)

// make svg responsive
  function responsivefy(svg_map) {
      // get container + svg aspect ratio
      var container = d3.select(svg_map.node().parentNode),
          width = parseInt(svg_map.style("width")),
          height = parseInt(svg_map.style("height")),
          aspect = width / height;

      // add viewBox and preserveAspectRatio properties,
      // and call resize so that svg resizes on inital page load
      svg_map.attr("viewBox", "0 0 " + width  + " " + height)
          .attr("preserveAspectRatio", "xMinYMid")
          .call(resize);

      // to register multiple listeners for same event type,
      // you need to add namespace, i.e., 'click.foo'
      // necessary if you call invoke this function for multiple svgs
      // api docs: https://github.com/mbostock/d3/wiki/Selections#on
      d3.select(window).on("resize." + container.attr("id"), resize);

      // get width of container and resize svg to fit it
      function resize() {
          var targetWidth = parseInt(container.style("width"));
          svg_map.attr("width", targetWidth);
          svg_map.attr("height", Math.round(targetWidth / aspect));
      }
    }
 
 var colorScale = d3.scaleLinear()
 		.domain([0, 0.2,0.4, 0.6,  0.8, 1])
      .interpolate(d3.interpolateHcl)
      .range(['rgba(237,248,251,0.9)', 'rgba(191,211,230,0.9)', 'rgba(158,188,218,0.9)', 'rgba(140,150,198,0.9)', 'rgba(136,86,167,0.9)', 'rgba(129,15,124, 0.9)']);


  // Tip

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return d.properties.all_simplified_Geography + ": " + d.properties.census_tracts_with_ldi_ldi.toFixed(3)
    })

  svg_map.call(tip)




function ready(error, data) {

	    if(error) {
      console.log("Had an error, exiting")
      return
    }
	 	
	 	var tracts = topojson.feature(data, data.objects.geo_with_ldi).features
	 	console.log(data)


    svg_map.selectAll(".tracts")
        .data(tracts)
      .enter().append("path")
        //.attr("class", function(d) { return "tract " + d.id; })
        .attr("d", path)
        .attr("fill", function(d){
        	if (! d.properties.census_tracts_with_ldi_ldi ){
        		return 'rgba(169,169,169,0.3)'
        	}
        	else{
        	return colorScale(d.properties.census_tracts_with_ldi_ldi)}
        })
        .attr('stroke', 'white')
        .attr('stroke-width', 0.1)
      .on('mouseover', 
      	function(d){
        tip.show(d)
        d3.select(this)
        .attr('fill', 'gold')
        .attr('stroke-width', 0.5)
        })
      .on('mouseout', function(d){
      	console.log(d)
      	tip.hide()
      	d3.select(this)
      	.attr('fill', function(d){
      		if (! d.properties.census_tracts_with_ldi_ldi ){
        		return 'rgba(169,169,169,0.3)'
        	}
        	else{
        	return colorScale(d.properties.census_tracts_with_ldi_ldi)} 
      	})
      	.attr('stroke-width', 0.1)
      })
	// 	.enter()
	// 	.append('path')
	// 	.attr('class', 'states')
	// 	.attr('d', path)
	// 	.on('mouseover', function(d){
	// 		var name = d.properties.STATE_ABBR;
	// 		return document.getElementById('name').innerHTML=name;
	// 	});



svg_map.append("g")
  .attr("class", "legendLinear")
  .attr("transform", "translate(490,460)");

var legendLinear = d3.legendColor()
  .shapeWidth(8)
  .cells(10)
  .labels([0,'','','','',0.5,'','','',1])
  .orient('horizontal')
  .shapeHeight(10)
  .shapePadding(0)
  .scale(colorScale);

svg_map.select(".legendLinear")
  .call(legendLinear)
  .attr('font-size', 9)
  .attr('fill', '#2E2E2E')
          

};
