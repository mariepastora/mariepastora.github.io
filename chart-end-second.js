// When clicking on "percentage" button
// Exact same function as for the previous graph, just with different dataset
// Sure there's a way to reassign the dataset when clicking on the button but no idea how to do it

function percentage(){

  var margin = { top: 20, right: 0, bottom: 20, left:25 }

  var width = 900 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom

  d3.select("#chart-end")
    .select("svg").remove()

  var svg = d3.select("#chart-end")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  var x = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.05)
    .align(0.1)

  var y = d3.scaleLinear()
    .rangeRound([height, 0])

  var z = d3.scaleOrdinal()
      .range(["#98969A", "#EA3F33", "#F08A33", "#D04A9A", "#2D81C5", "#5AB24D", "#D8CA44", "#FDEFD7"])   

  d3.csv("tot.csv", function(d, i, columns) {
    for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]]
    d.total = t
    return d
  }, function(error, data) {
    if (error) throw error

  var keys = data.columns.slice(1);

  data.sort(function(a, b) { return b.total - a.total })
  x.domain(data.map(function(d) { return d.STATES }))
  y.domain([0, d3.max(data, function(d) { return d.total; })]).nice()
  z.domain(keys)

  svg.append("g")
    .selectAll("g")
    .data(d3.stack().keys(keys)(data))
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key) })
    .selectAll("rect")
    .data(function(d) { return d })
    .enter().append("rect")
    .attr("x", function(d) { return x(d.data.STATES) })
    .attr("y", function(d) { 
        return y(d[1])
      }
  )

    .attr("height", function(d) { return y(d[0]) - y(d[1]) })
    .attr("width", x.bandwidth())
    .attr("opacity", "0.6")
  

  svg.selectAll("rect")
    .on("mouseover", function() { 
      d3.select(this).attr("opacity","1").attr("stroke", "lightblue").attr("stroke-width", "1.2")
      tooltip.style("display", null)})
    .on("mouseout", function() { 
      d3.select(this).attr("opacity","0.6").attr("stroke", "lightblue").attr("stroke-width", "0")
      tooltip.style("display", "none") })
    .on("mousemove", function(d) { 
      var xPosition = d3.mouse(this)[0] - 15;
      var yPosition = d3.mouse(this)[1] - 25;
      tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")")
      tooltip.select("text").text(d["data"]["STATES"] + ": " + (+d[1] - +d[0]) + "MWH")
    })



  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))

  svg.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y).ticks(null, "s"))
    .append("text")
      .attr("x", 2)
      .attr("y", y(y.ticks().pop()) + 0.5)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      .text("Percentage of production of the State");

  var tooltip = svg.append("g")
    .attr("class", "tip2")
    .style("display", "none")

  tooltip.append("text")
    .attr("x", 15)
    .attr("dy", "1.2em")
    .style("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("font-weight", "bold")

}
)};
