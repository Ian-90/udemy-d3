/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json('data/buildings.json').then(data => {
  data.forEach(d => d.height = +d.height )

  const svg = d3.select("#chart-area")
                .append("svg")
                .attr("width", "500px")
                .attr("height", "500px")

  svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 30 )
      .attr('y', 50)
      .attr('width', 20)
      .attr('height', d => d.height)
      .attr('fill', 'grey')
}) 

