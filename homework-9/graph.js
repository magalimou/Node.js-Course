class Graph {
    #adjacencyList;

    constructor() {
        this.#adjacencyList = {};
    }

    add(node) {
        if (!this.#adjacencyList[node]) {
            this.#adjacencyList[node] = [];
        }
    }

    addEdge(node1, node2, weight = 1) {
        if (this.#adjacencyList[node1] && this.#adjacencyList[node2]) {
            this.#adjacencyList[node1].push({ node: node2, weight });
            this.#adjacencyList[node2].push({ node: node1, weight });
        }
    }

    
    dfs(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.#adjacencyList;

        function dfsHelper(node) {
            if (!node || !adjacencyList[node]) return null;
            visited[node] = true;
            result.push(node);
            adjacencyList[node].forEach(neighbor => {
                if (!visited[neighbor.node]) {
                    dfsHelper(neighbor.node);
                }
            });
        }

        dfsHelper(start);
        return result;
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            let vertex = queue.shift();
            result.push(vertex);
            this.#adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor.node]) {
                    visited[neighbor.node] = true;
                    queue.push(neighbor.node);
                }
            });
        }
        return result;
    }

    dijkstra(start, finish) {
        const distances = {};
        const previous = {};
        const nodes = new Set();
        let path = [];
        let smallest;

        //initialize distances and previous
        for (let node in this.adjacencyList) {
            if (node === start) {
                distances[node] = 0;
            } else {
                distances[node] = Infinity;
            }
            nodes.add(node);
            previous[node] = null;
        }

        while (nodes.size) {
            
            smallest = Array.from(nodes).reduce((minNode, node) => {
                return distances[node] < distances[minNode] ? node : minNode;
            });

            nodes.delete(smallest);

            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (distances[smallest] !== Infinity) {
                for (let neighbor of this.adjacencyList[smallest]) {
                    let candidate = distances[smallest] + neighbor.weight;
                    let nextNeighbor = neighbor.node;

                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                    }
                }
            }
        }

        return path.concat(smallest).reverse();
    }

    bfsShortestPath(start, finish) {
        const queue = [start];
        const visited = {};
        const previous = {};
        let path = [];

        while (queue.length > 0) {
            const current = queue.shift();
            visited[current] = true;

            if (current === finish) {
                let node = finish;
                while (node !== start) {
                    path.unshift(node);
                    node = previous[node];
                }
                path.unshift(start);
                break;
            }

            for (const neighbor of this.#adjacencyList[current]) {
                if (!visited[neighbor.node]) {
                    queue.push(neighbor.node);
                    visited[neighbor.node] = true;
                    previous[neighbor.node] = current;
                }
            }
        }

        return path;
    }

    get adjacencyList() {
        return this.#adjacencyList;
    }
    
}

// Usage
const graph = new Graph();
graph.add('A');
graph.add('B');
graph.add('C');
graph.add('D');
graph.add('E');
graph.add('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'D', 3);
graph.addEdge('C', 'E', 3);
graph.addEdge('D', 'E', 1);
graph.addEdge('D', 'F', 8);
graph.addEdge('E', 'F', 10);

console.log(graph.adjacencyList);

console.log(graph.dfs('A'));
console.log(graph.bfs('A'));

console.log(graph.dijkstra('A', 'F'));

graph.addEdge('F', 'A', 1);

console.log(graph.bfsShortestPath('A', 'F'));
