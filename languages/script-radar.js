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
	.selectAll('svg')
	.append('svg')
	.attr("width", width)
	.attr("height", height);


d3.json("data2.json", function(error, data) {
    if (error) throw error;
    RadarChart2.draw("#radar-2", data, config);
});

var svg = d3.select('#radar-2')
	.selectAll('svg')
	.append('svg')
	.attr("width", width)
	.attr("height", height);

