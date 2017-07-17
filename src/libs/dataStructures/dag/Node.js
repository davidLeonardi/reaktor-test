// This class provides a node, which is the basic container used to store information within our DAG
export default class Node {

  /**
   * Constructor for class
   * @param {Object} cArgs Constructor arguments. Currently accepts id, descriptionHighlight and description
   */
  constructor(cArgs) {
    this.id = cArgs.id;
    this.descriptionHighlight = cArgs.descriptionHighlight;
    this.description = cArgs.description;
  }
}
