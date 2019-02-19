var frequency_list = [
  {
    "text": "Ocean",
    "size": 100
  },
  {
    "text": "Basketball",
    "size": 60
  },
  {
    "text": "Sushi",
    "size": 30
  },
  {
    "text": "Family",
    "size": 60
  },
  {
    "text": "Friends",
    "size": 50
  },
  {
    "text": "Entrepreneurship",
    "size": 70
  },
  {
    "text": "Oil",
    "size": 40
  },
  {
    "text": "Natural Gas",
    "size": 60
  },
  {
    "text": "Hydro-Power",
    "size": 20
  },
  {
    "text": "Cuisine",
    "size": 90
  },
  {
    "text": "Sustainability",
    "size": 80
  },
  {
    "text": "NBA",
    "size": 60
  },
  {
    "text": "76ers",
    "size": 30
  }];


var color = d3.scale.linear()
    .domain([0,1,2,3,4,5,6,10,15,20,100])
    .range(["#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"]);

d3.layout.cloud().size([800, 300])
    .words(frequency_list)
    .rotate(0)
    .fontSize(function(d) { return d.size; })
    .on("end", draw)
    .spiral("archimedean")
    .start();

function draw(words) {
    d3.select("body").append("svg")
        .attr("width", "850")
        .attr("height", "350")
        .attr("class", "wordcloud")
        .append("g")
        // without the transform, words words would get cutoff to the left and top, they would
        // appear outside of the SVG area
        .attr("transform", "translate(320,200)")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("fill", function(d, i) { return color(i); })
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
}








