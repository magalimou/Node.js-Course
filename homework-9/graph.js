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

    addEdge(node1, node2) {
        if (this.#adjacencyList[node1] && this.#adjacencyList[node2]) {
            this.#adjacencyList[node1].push(node2);
            this.#adjacencyList[node2].push(node1);
        }
    }

    dfs(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.#adjacencyList;

        function dfsHelper(node) {
            if (!node) return null;
            visited[node] = true;
            result.push(node);
            adjacencyList[node].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfsHelper(neighbor);
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
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
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

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.dfs('A'));
console.log(graph.bfs('A'));