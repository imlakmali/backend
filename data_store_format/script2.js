let LinearData = [
  { "id": "24", "name": "A3b", "parent_id": "8" },
  { "id": "42", "name": "D1a", "parent_id": "15" },
  { "id": "15", "name": "D1", "parent_id": "5" },
  { "id": "30", "name": "B2c", "parent_id": "10" },
  { "id": "22", "name": "A2c", "parent_id": "7" },
  { "id": "37", "name": "C2b", "parent_id": "13" },
  { "id": "18", "name": "A1a", "parent_id": "6" },
  { "id": "47", "name": "D3a", "parent_id": "17" },
  { "id": "43", "name": "D1b", "parent_id": "15" },
  { "id": "1", "name": "ROOT", "parent_id": "0" },
  { "id": "16", "name": "D2", "parent_id": "5" },
  { "id": "9", "name": "B1", "parent_id": "3" },
  { "id": "13", "name": "C2", "parent_id": "4" },
  { "id": "40", "name": "C3b", "parent_id": "14" },
  { "id": "29", "name": "B2b", "parent_id": "10" },
  { "id": "27", "name": "B1b", "parent_id": "9" },
  { "id": "10", "name": "B2", "parent_id": "3" },
  { "id": "6", "name": "A1", "parent_id": "2" },
  { "id": "19", "name": "A1b", "parent_id": "6" },
  { "id": "11", "name": "B3", "parent_id": "3" },
  { "id": "35", "name": "C1b", "parent_id": "12" },
  { "id": "33", "name": "B3c", "parent_id": "11" },
  { "id": "25", "name": "A3c", "parent_id": "8" },
  { "id": "12", "name": "C1", "parent_id": "4" },
  { "id": "44", "name": "D2a", "parent_id": "16" },
  { "id": "20", "name": "A2a", "parent_id": "7" },
  { "id": "38", "name": "C2c", "parent_id": "13" },
  { "id": "31", "name": "B3a", "parent_id": "11" },
  { "id": "17", "name": "D3", "parent_id": "5" },
  { "id": "34", "name": "C1a", "parent_id": "12" },
  { "id": "46", "name": "D2c", "parent_id": "16" },
  { "id": "26", "name": "B1a", "parent_id": "9" },
  { "id": "32", "name": "B3b", "parent_id": "11" },
  { "id": "14", "name": "C3", "parent_id": "4" },
  { "id": "39", "name": "C3a", "parent_id": "14" },
  { "id": "23", "name": "A3a", "parent_id": "8" },
  { "id": "4", "name": "C", "parent_id": "1" },
  { "id": "28", "name": "B2a", "parent_id": "10" },
  { "id": "48", "name": "D3b", "parent_id": "17" },
  { "id": "45", "name": "D2b", "parent_id": "16" },
  { "id": "2", "name": "A", "parent_id": "1" },
  { "id": "3", "name": "B", "parent_id": "1" },
  { "id": "7", "name": "A2", "parent_id": "2" },
  { "id": "21", "name": "A2b", "parent_id": "7" }
];

let completeRecursionsParentId = [];
let recursionCount = 0;
let globalChildren = [];

// Convert flat data for structured---
function sortStructuredArrayByHierarchy(currentParents, sourceArray, destArray) {
  currentParents.forEach(parentID => {
      let children = sourceArray.filter(item => item.parent_id === parentID);

      children.forEach(element => destArray.push(element));

      sortStructuredArrayByHierarchy(children.map(element => element.id), sourceArray, destArray);
  });
}

// Find and build child structure
function buildChildStructure(id, sourceArray) {
  let result = sourceArray.filter(item => item.parent_id === id).map(item => ({
      id: item.id,
      name: item.name,
      children: buildChildStructure(item.id, sourceArray)
  }));

  return result;
}

// Main Process---
function main() {
  // Step(01)---
  let sortedLinerData = [];
  sortStructuredArrayByHierarchy(['0'], LinearData, sortedLinerData);

  // Step(02)---
  let outPut = buildChildStructure('1', sortedLinerData)[0];

  console.log(JSON.stringify(outPut, null, 2));

  // Test---
  let parentIds = ['15', '17']; 
  let allChildrenArrays = parentIds.map(parentId => buildChildStructure(parentId, sortedLinerData));
  console.log("All Children Arrays for multiple IDs:", allChildrenArrays);
}

// Startup
main();
