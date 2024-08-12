 
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
    { "id": "22", "name": "A2c", "parent_id": "7" },
    { "id": "41", "name": "C3c", "parent_id": "14" },
    { "id": "8", "name": "A3", "parent_id": "2" },
    { "id": "47", "name": "D3a", "parent_id": "17" },
    { "id": "5", "name": "D", "parent_id": "1" },
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
    { "id": "21", "name": "A2b", "parent_id": "7" },
    { "id": "12", "name": "C1", "parent_id": "4" },
    { "id": "27", "name": "B1b", "parent_id": "9" }
  ];
    
  function sortStructuredArrayByHierarchy(currentParents, sourceArray, destArray) {

    currentParents.forEach(parentID => {

        let children = sourceArray.filter(item => item.parent_id === parentID);

        children.forEach(element => destArray.push(element));

        sortStructuredArrayByHierarchy(children.map(element => element.id), sourceArray, destArray);

    });
}

function findChildrenArray(parentId, node) {

    if (node.id === parentId) {
        return node.children;
    }

    for (let child of node.children) {

        let result = findChildrenArray(parentId, child);

        if (result !== undefined) {

            return result;
        }
    }
    return undefined;
}

function findChildrenOfMultipleParents(parentIds, root) {

    let result = [];

    parentIds.forEach(parentId => {

        let children = findChildrenArray(parentId, root);

        result.push(children);

    });

    return result;
}

function main() {
    // Step (01) - Sort the flat data
    let sortedLinearData = [];
    sortStructuredArrayByHierarchy(['0'], LinearData, sortedLinearData);
    
    // Step (02) - Convert sorted data to hierarchical format
    let output = {
        id: sortedLinearData[0].id,
        name: sortedLinearData[0].name,
        children: []
    };

    sortedLinearData.forEach((element, idx) => {
        if (idx === 0) {
            return;
        }
        let childrenArray = findChildrenArray(element.parent_id, output);

        if (childrenArray) {
            childrenArray.push({
                id: element.id,
                name: element.name,
                children: []
            });
        }
    });

    // Test the new function
    function test() {
        let sample = {
            id: '0',
            name: 'ROOT',
            children: [
                {
                    id: '1',
                    name: 'A',
                    children: [
                        {
                            id: '5',
                            name: 'A1',
                            children: [
                                {
                                    id: '8',
                                    name: 'A1a',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: '6',
                            name: 'A2',
                            children: []
                        },
                        {
                            id: '7',
                            name: 'A3',
                            children: []
                        }
                    ]
                },
                {
                    id: '2',
                    name: 'B',
                    children: []
                },
                {
                    id: '3',
                    name: 'C',
                    children: []
                },
                {
                    id: '4',
                    name: 'D',
                    children: []
                }
            ]
        };

        let result = findChildrenOfMultipleParents(['1', '3'], sample);
        console.log(JSON.stringify(result, null, 2));
    }

    test(); 
}

// Startup
main();


















// Step (1)
    // Sort the array in a way that parents are found befor their children,
// step(2)
    // Go through the sorted array and create eache record as a child in inside their respective parent element.
//  step (3)
    // go throug sorted array 
 
    
// Next step---

// Change this recursive function to find more than one parents at the same time.

// allChildrenArrays = findChildrenArrayOf([123, 456])

// console.log(allChildrenArray)   //--->  [[], []]