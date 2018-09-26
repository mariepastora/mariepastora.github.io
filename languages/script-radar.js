
    var width = 200,
    height = 200;

// Config for the Radar chart
var config = {
    w: width,
    h: height,
    maxValue: 100,
    levels: 5,
    ExtraWidthX: 200
}


d3.json("data.json", function(error, data) {
    if (error) throw error;
    RadarChart.draw("#radar-1", data, config);
});

var svg = d3.select('#radar-1')
	.append('svg')
	.attr("width", width)
	.attr("height", height)
    .append("g")
    .call(responsivefy)

;


d3.json("data2.json", function(error, data) {
    if (error) throw error;
    RadarChart2.draw("#radar-2", data, config);
});

var svg = d3.select('#radar-2')
	.append('svg')
	.attr("width", width)
	.attr("height", height)
        .append("g")
    .call(responsivefy)



// make svg responsive
  function responsivefy(svg) {
      // get container + svg aspect ratio
      var container = d3.select(svg.node().parentNode),
          width = parseInt(svg.style("width")),
          height = parseInt(svg.style("height")),
          aspect = width / height;

      // add viewBox and preserveAspectRatio properties,
      // and call resize so that svg resizes on inital page load
      svg.attr("viewBox", "0 0 " + width  + " " + height)
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
          svg.attr("width", targetWidth);
          svg.attr("height", Math.round(targetWidth / aspect));
      }
    } 
