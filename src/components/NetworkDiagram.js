import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const NetworkDiagram = ({ data }) => {
    const svgRef = useRef();
// You can create a function to determine the color based on the gang value
    function getColor(d) {
        const gangColors = {
            '12/OM': '#e806f8',
            '12World/12Anti': '#FAEBD7',
            '156': '#00FFFF',
            '7th WoodGrange x BWC Gang Profile': '#7FFFD4',
            '9iners': '#ceff18',
            '9th Street': '#f6991d',
            'ACG/6th': '#ff2dab',
            'Active Gang': '#000000',
            'AY/Aylesbury Estate': '#ff004e',
            'B-Side': '#0000FF',
            'Block 6': '#8A2BE2',
            'Browning17': '#A52A2A',
            'CGE': '#DEB887',
            'Church Road': '#5F9EA0',
            'Cumbo': '#7FFF00',
            'Custom House': '#D2691E',
            '3×3 Gang': '#0cffc6',
            'Harlem Spartans': '#6495ED',
            'HRB': '#351494',
            'Kuku': '#DC143C',
            'Mali Strip': '#00FFFF',
            'Moscow 17': '#00008B',
            'NPK/Northumberland Park Kids': '#008B8B',
            'OMH/Manor House': '#B8860B',
            'Original 3rd': '#7ee826',
            'Peckwater': '#006400',
            'Rayners Lane': '#b629ff',
            'Siraq': '#BDB76B',
            'Skengfield/AP': '#8B008B',
            'TPL Gang': '#556B2F',
            'V8/Hornsey': '#FF8C00',
            'WGM (WoodGreenMOB)': '#9932CC',
            'Zero Tolerance': '#8B0000'
            // Add more mappings as needed
        };
        return gangColors[d.gang] || 'gray'; // Default color if gang is not defined
    }

    useEffect(() => {
        if (!data) return;

        // Function to generate links between members of the same gang
        function generateIntraGangLinks(nodes) {
            const links = [];
            const gangMembers = {};

            // Group nodes by gang
            nodes.forEach(node => {
                if (node.gang) {
                    gangMembers[node.gang] = gangMembers[node.gang] || [];
                    gangMembers[node.gang].push(node);
                }
            });

            // Create links within each gang
            Object.values(gangMembers).forEach(members => {
                for (let i = 0; i < members.length; i++) {
                    for (let j = i + 1; j < members.length; j++) {
                        links.push({ source: members[i].id, target: members[j].id, isIntraGang: true });
                    }
                }
            });

            return links;
        }

        // Generate intra-gang links and add them to the existing links
        const intraGangLinks = generateIntraGangLinks(data.nodes);
        data.links.push(...intraGangLinks);

        const svg = d3.select(svgRef.current);
        const width = +svg.attr('width');
        const height = +svg.attr('height');

        // Initialize simulation
        const simulation = d3.forceSimulation(data.nodes)
            .force("link", d3.forceLink(data.links).id(d => d.id))
            .force("charge", d3.forceManyBody().strength(-20))
            .force("center", d3.forceCenter(width / 2, height / 2));

        // Create links
        const link = svg.append("g")
            .selectAll("line")
            .data(data.links)
            .join("line")
            .attr("stroke", d => d.isIntraGang ? "none" : "#aaa") // Make intra-gang links invisible
            .attr("stroke-width", d => Math.sqrt(d.value))
            .attr("stroke-opacity", d => d.isIntraGang ? 0 : 0.1); // Set opacity to 0 for intra-gang links

        // Create nodes
        const node = svg.append("g")
            .selectAll("circle")
            .data(data.nodes)
            .join("circle")
            .attr("r", 3)
            .attr("fill", d => getColor(d))
            .attr("stroke", "#fff")
            .attr("stroke-width", 0.5)
            .call(drag(simulation));

        node.append("title")
            .text(d => d.id);

        // Update positions on simulation tick
        simulation.on("tick", () => {
            link.attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node.attr("cx", d => d.x)
                .attr("cy", d => d.y);
        });

        // Drag functionality
        function drag(simulation) {
            function dragstarted(event) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
            }

            function dragged(event) {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
            }

            function dragended(event) {
                if (!event.active) simulation.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
            }

            return d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended);
        }

        return () => {
            svg.selectAll("*").remove();
            simulation.stop();
        };
    }, [data]);

    return <svg ref={svgRef} width={1200} height={1000} style={{ border: "none", borderRadius: "8px" }} />;
};

export default NetworkDiagram;
