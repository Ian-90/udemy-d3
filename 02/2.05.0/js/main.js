/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

const svg = d3.select('#chart-area')
              .append('svg')
              .attr('width', '500px')
              .attr('height', '400px')

svg.append("line")
    .attr('x1', 10)
    .attr('y1', 10)
    .attr('x2', 50)
    .attr('y2', 50)
    .attr('stroke', 'green')
    .attr('stroke-width', 3)

svg.append("rect")
    .attr('x', 60)
    .attr('y', 60)
    .attr('width', 100)
    .attr('height', 50)
    .attr('fill', 'red')

svg.append("circle")
    .attr('cx', 50)
    .attr('cy', 200)
    .attr('r', 20)
    .attr('fill', 'blue')

svg.append("text")
    .attr('x', 60)
    .attr('y', 300)
    .text('hello')
    .attr('fill', 'grey')
    .attr('font-size', 30)
    .attr('text-anchor', 'middle')
    .attr('font-weight', 'bold')

svg.append("ellipse")
    .attr('cx', 300)
    .attr('cy', 200)
    .attr('rx', 200)
    .attr('ry', 60)