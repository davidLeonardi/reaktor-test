import {parse} from '../dataParser';
import Dag from '../dataStructures/dag';

// Keep our DAG instance in the module's scope
let dag = null;

// Load the Debian/Ubuntu package status file and generate our datamodel from it.
export function load(filePath) {
  return parse(filePath)
    .then((packageList) => {
      dag = new Dag();

      // Create all the nodes in the DAG. A node represents a package.
      packageList.forEach((packageItem) => {
        dag.addNode({
          id: packageItem.id,
          descriptionHighlight: packageItem.descriptionHighlight,
          description: packageItem.description,
        });
      });

      // Create all the edges in the DAG. The edges represent dependency links.
      packageList.forEach((packageItem) => {
        packageItem.dependencies.forEach((dependency) => {
          dag.addEdge(dependency, packageItem.id);
        });
      });
      return true;
    });
}

// Retrieve a sorted array of package objects from the DAG
export function getPackageList() {
  return dag.getSortedNodes();
}

// Return the known data for a given package
export function getPackageDetail(packageId) {
  return dag.getNode(packageId);
}

// Compute which dependencies a given package has
export function getDependencies(packageId) {
  return dag.findDescendants(packageId);
}

// Compute which packages depend on a given package
export function getParents(packageId) {
  return dag.findParents(packageId);
}
