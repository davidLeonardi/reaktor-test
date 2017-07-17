import Node from './Node';
import Edge from './Edge';

// This class provides a DAG, or a "Directed Acyclic Graph". This data structure is ideal for us because it allows us to represent the the dependency tree of the packages in an optimal way:
// Packages are stored independently of their relations among themselves, and the relations are simple 1-to-1 relations which can easily be traversed without having to resort to nested iterations.
export default class DAG {
  constructor() {
    this.nodes = {};
    this.edges = {};
    this.edgesFrom = {};
    this.edgesTo = {};
  }

  // Add a new node by its Id and Description
  addNode(oArgs) {
    const {id, descriptionHighlight, description} = oArgs;
    const node = new Node({
      id,
      descriptionHighlight,
      description,
    });
    this.nodes[node.id] = node;
    return node;
  }

  // Return a node by its Id
  getNode(nodeId) {
    return this.nodes[nodeId];
  }

  // Return a list of nodes in the DAG sorted alphabetically
  getSortedNodes() {
    const collator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: 'base',
    }); // This provides "natural sort" in modern browsers
    return Object.keys(this.nodes).sort(collator.compare).map((nodeName) => {
      return this.getNode(nodeName);
    });
  }

  // Add an edge to all the lookup tables
  addEdge(from, to) {
    const edge = new Edge(from, to);
    if (!this.edges[edge.getId()]) {
      this.edges[edge.getId()] = [];
    }
    this.edges[edge.getId()].push(edge);

    if (!this.edgesFrom[from]) {
      this.edgesFrom[from] = [];
    }
    this.edgesFrom[from].push(edge);

    if (!this.edgesTo[to]) {
      this.edgesTo[to] = [];
    }
    this.edgesTo[to].push(edge);
  }

  // Find the parents of a given node and return all the relative nodes in a BFS way
  findParents(nodeId) {
    let resultFlatList = [];
    let edgeList = this.edgesTo[nodeId];
    while (edgeList && edgeList.length) {
      let currentEdge = edgeList.shift();
      let currentNodeId = currentEdge.getFrom();
      if (resultFlatList.indexOf(currentNodeId) === -1) {
        if (this.edgesTo[currentNodeId]) {
          edgeList = edgeList.concat(this.edgesTo[currentNodeId]);
        }
        resultFlatList.push(currentNodeId);
      }
    }

    return resultFlatList;
  }

  // Find the descendants of a given node and return all the children in a BFS way.
  findDescendants(nodeId) {
    let resultFlatList = [];
    let edgeList = this.edgesFrom[nodeId];
    while (edgeList && edgeList.length) {
      let currentEdge = edgeList.pop();
      let currentNodeId = currentEdge.getTo();
      if (resultFlatList.indexOf(currentNodeId) === -1) {
        if (this.edgesFrom[currentNodeId]) {
          edgeList = edgeList.concat(this.edgesFrom[currentNodeId]);
        }
        resultFlatList.unshift(currentNodeId);
      }
    }

    return resultFlatList;
  }
}
