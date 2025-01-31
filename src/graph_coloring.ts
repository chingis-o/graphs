type Graph = Map<number, number[]>;

function graphColoring(graph: Graph): Map<number, number> {
    // Map to store the color assigned to each vertex
    const colorMap: Map<number, number> = new Map();

    // Iterate over all vertices in the graph
    for (const [vertex, neighbors] of graph.entries()) {
        // Set of colors used by adjacent vertices
        const usedColors = new Set<number>();

        // Mark colors used by neighbors
        for (const neighbor of neighbors) {
            if (colorMap.has(neighbor)) {
                usedColors.add(colorMap.get(neighbor)!);
            }
        }

        // Assign the smallest available color to the current vertex
        let color = 0;
        while (usedColors.has(color)) {
            color++;
        }
        colorMap.set(vertex, color);
    }

    return colorMap;
}

// Example usage
const graph: Graph = new Map([
    [0, [1, 2]], // Vertex 0 is connected to vertices 1 and 2
    [1, [0, 2, 3]], // Vertex 1 is connected to vertices 0, 2, and 3
    [2, [0, 1, 3]], // Vertex 2 is connected to vertices 0, 1, and 3
    [3, [1, 2]], // Vertex 3 is connected to vertices 1 and 2
]);

const result = graphColoring(graph);

console.log("Vertex Colors:");
for (const [vertex, color] of result.entries()) {
    console.log(`Vertex ${vertex}: Color ${color}`);
}