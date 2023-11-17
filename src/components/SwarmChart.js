import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const SwarmChart = ({ data }) => {
    const d3Container = useRef(null);

    useEffect(() => {
        if (data && d3Container.current) {
            const svg = d3.select(d3Container.current);

            // Set the dimensions and margins of the graph
            const margin = { top: 10, right: 30, bottom: 30, left: 40 },
                width = 1200 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;

            // Clear SVG before re-rendering
            svg.selectAll("*").remove();

            // Create SVG element
            const chart = svg
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);

            // Define the scale for the X-axis
            const xScale = d3.scaleLinear()
                .domain([0, 30]) // Assuming 0 to 10 is your data range
                .range([0, width]);

            // Set a constant Y position for the center line
            const centerY = height / 2;

            // Add customized X axis with increased stroke width
            const xAxis = d3.axisBottom(xScale)
                .tickValues([xScale.domain()[0], xScale.domain()[1]])
                .tickFormat(d3.format("d"));

            chart.append("g")
                .attr("transform", `translate(0,${centerY})`)
                .call(xAxis)
                .selectAll("text") // Selects the text elements (tick labels)
                .style("font-size", "16px") // Increases the font size
                .style("font-family", "Arial, sans-serif"); // Changes the font



            const circleRadius = 10;

            // Force simulation
            const simulation = d3.forceSimulation(data)
                .force("x", d3.forceX(d => xScale(d.score)).strength(0.2))
                .force("y", d3.forceY(centerY).strength(1))
                .force("collide", d3.forceCollide(circleRadius + 5)) // Radius for collision force
                .stop();

            // Run the simulation
            for (let i = 0; i < 120; ++i) simulation.tick();

            // Tooltip for rapper's name
            const tooltip = d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("opacity", 0)
                .style("position", "absolute")
                .style("text-align", "center")
                .style("padding", "8px")
                .style("background", "#333333")
                .style("color", "white")
                .style("border", "solid")
                .style("border-width", "0px")
                .style("border-radius", "5px")
                .style("pointer-events", "none");

            // Gang name display
            const gangDisplay = svg.append("text")
                .attr("x", width) // Position at the bottom right
                .attr("y", height - 5)
                .attr("text-anchor", "end") // Align text to the right
                .style("font-size", "16px")
                .style("font-family", "Arial, sans-serif")
                .style("opacity", 0); // Initially hidden

            // Draw circles
            chart.selectAll("circle")
                .data(data)
                .enter()
                .append("circle")
                .attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; })
                .attr("r", circleRadius)
                .style("fill", "#939393")
                .style("opacity", 1)
                .on("mouseover", function(event, d) {
                    tooltip.transition()
                        .duration(200)
                        .style("opacity", .9);
                    tooltip.html(d.name)
                        .style("left", (event.pageX - tooltip.node().offsetWidth / 2) + "px")
                        // Increased vertical offset for tooltip
                        .style("top", (event.pageY - circleRadius * 3 - 15) + "px");
                    // Show gang name
                    gangDisplay.transition()
                        .duration(200)
                        .style("opacity", 1)
                        .text(d.gang);
                })
                .on("mouseout", function(d) {
                    tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                });
        }
    }, [data]);

    return (
        <svg
            className="d3-component"
            width={1200}
            height={200}
            ref={d3Container}
        />
    );
};

export default SwarmChart;
