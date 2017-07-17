/**
 * This module provides a parser for the Debian/Ubuntu package manager status file.
 */

let currentField = ''; // Used in the reducer closure.

export function parse(filePath) {
  return retrieveDataFile(filePath)
    .then((text) => {
      let packageStringList = splitTextIntoPackages(text);
      let packageList = mapPackages(packageStringList);
      return packageList;
    })
    .catch((error) => {
      console.log(`An error occured: ${error}`);
      return error;
    });
}

function retrieveDataFile(filePath) {
  return fetch(filePath).then((response) => {
    return response.text();
  });
}

function splitTextIntoPackages(text) {
  return text.trim().split(/\r?\n\n/);
}

function mapPackages(packageStringList) {
  return packageStringList.map((individualPackageString) => {
    let individualPackageLines = individualPackageString.split(/\r?\n/);
    let individualPackageLineHash = individualPackageLines.reduce(extractFields, {});

    if (individualPackageLineHash['Depends']) {
      individualPackageLineHash['Depends'] = individualPackageLineHash['Depends'].split(',').map((dependency) => {
        return dependency.split(/\(([^\)]+)\)/)[0].trim(); // remove the version number from the package names
      });
    }

    return {
      id: individualPackageLineHash['Package'],
      descriptionHighlight: individualPackageLineHash['DescriptionHighlight'] && individualPackageLineHash['DescriptionHighlight'].trim() || '',
      description: individualPackageLineHash['Description'] && individualPackageLineHash['Description'].trim() || '',
      dependencies: individualPackageLineHash['Depends'] || [],
    };
  });
}

function extractFields(result, item) {
  const splitItem = item.split(': ');
  if (splitItem[1]) {
    currentField = splitItem[0];
    // The first line of a description has a special relevance, more than other lines. Store it separately.
    if (currentField === 'Description') {
      result['DescriptionHighlight'] = splitItem[1];
      result['Description'] = '';
    } else {
      result[splitItem[0]] = splitItem[1];
    }
  } else {
    if (item === ' .' || item === '	.') { // eslint-disable-line no-tabs
      result[currentField] = result[currentField] += '\n';
    } else { // Any other line in a multiline field
      result[currentField] = result[currentField] + item;
    }
  }
  return result;
}
