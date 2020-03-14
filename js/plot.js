// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 860 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;
// data
var allFiles = ["data/Baird4.csv"
	       ,"data/Baird5.csv"
	       ,"data/Baird6.csv"
	       ,"data/Baird7.csv"
	       ,"data/Baird8.csv"
	       ,"data/Baird6-2.csv"
	       ,"data/Baird7-2.csv"
               ]
d3.select("#selectButton")
      .selectAll('myOptions')
      .data(allFiles)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
.append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Add X axis 
var x = d3.scaleLinear()
          .range([ 0, width ]);
var xAxis = d3.axisBottom(x).ticks(5);
svg.append("g")
.attr("transform", "translate(0," + height + ")")
.attr("class","myXaxis");

// Add Y axis
var y = d3.scaleLinear()
          .range([ height, 0]);
var yAxis = d3.axisLeft(y).ticks(5);
svg.append("g")
.attr("class", "myYaxis");


//Read the data
function update(file) {

    d3.csv(file

    // When reading the csv, I must format variables:
    //function(d){
    //  return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }}
    ).then(
    // Now I can use this dataset:
    function(data) {
        //update x axis
        x.domain(d3.extent(data, function(d) { return d.steps; }));
        svg.selectAll(".myXaxis").transition()
            .duration(3000)
            .call(xAxis);

        // update y axis 
        y.domain([d3.min(data, function(d){ return +d.last;}), d3.max(data, function(d) { return +d.last; })]);
        svg.selectAll(".myYaxis")
            .transition()
            .duration(3000)
            .call(yAxis);
        // Create a update selection: bind to the new data
        var u = svg.selectAll(".lineTest")
            .data([data], function(d){ return d.steps });
        var v = svg.selectAll(".lineTest2")
            .data([data], function(d){ return d.steps });
        var w = svg.selectAll(".lineTest3")
            .data([data], function(d){ return d.steps });

    //    Add the line
        u.enter()
        .append("path")
        .datum(data)
        .attr("class", "lineTest")
        .merge(u)
        .transition()
        .duration(3000)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 4)
        .attr("d", d3.line()
            .x(function(d) { return x(d.steps) })
            .y(function(d) { return y(d.w1) })
            )

        v.enter()
        .append("path")
        .datum(data)
        .attr("class", "lineTest2")
        .merge(v)
        .transition()
        .duration(3000)
        .attr("fill", "none")
        .attr("stroke", "darkred")
        .attr("stroke-width", 4)
        .attr("d", d3.line()
            .x(function(d) { return x(d.steps) })
            .y(function(d) { return y(d.second) })
            )
            
        w.enter()
        .append("path")
        .datum(data)
        .attr("class", "lineTest3")
        .merge(w)
        .transition()
        .duration(3000)
        .attr("fill", "none")
        .attr("stroke", "darkorange")
        .attr("stroke-width", 4)
        .attr("d", d3.line()
            .x(function(d) { return x(d.steps) })
            .y(function(d) { return y(d.last) })
            )
        // svg.append("path")
        // .datum(data)
        // .attr("fill", "none")
        // .attr("stroke", "darkred")
        // .attr("stroke-width", 4)
        // .attr("d", d3.line()
        //     .x(function(d) { return x(d.steps) })
        //     .y(function(d) { return y(d.w5) })
        //     )

        // svg.append("path")
        // .datum(data)
        // .attr("fill", "none")
        // .attr("stroke", "darkorange")
        // .attr("stroke-width", 4)
        // .attr("d", d3.line()
        //     .x(function(d) { return x(d.steps) })
        //     .y(function(d) { return y(d.w6) })
        //     )

    })
}
    // When the button is changed, run the updateChart function
    d3.select("#selectButton").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        update(selectedOption)
    })

update(allFiles[0])
