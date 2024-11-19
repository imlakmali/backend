
// for the test (data)
const treeData = {
    id: "0",
    name: "ROOT",
    children: [
        {
            id: "1",
            name: "a",
            children: [
                {
                    id: "1.1",
                    name: "a.1",
                    children: []
                },
                {
                    id: "1.2",
                    name: "a.2",
                    children: [
                        {
                            id: "1.2.1",
                            name: "a.2.1",
                            children: []
                        },
                        {
                            id: "1.2.2",
                            name: "a.2.2",
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            id: "2",
            name: "b",
            children: []
        },
        {
            id: "3",
            name: "c",
            children: []
        }
    ]
};


const linearData = {
    "id": "1",
    "name": "ROOT",
    "children": [
      {
        "id": "5",
        "name": "D",
        "children": [
          {
            "id": "15",
            "name": "D1",
            "children": [
              {
                "id": "42",
                "name": "D1a",
                "children": []
              },
              {
                "id": "43",
                "name": "D1b",
                "children": []
              }
            ]
          },
          {
            "id": "16",
            "name": "D2",
            "children": [
              {
                "id": "44",
                "name": "D2a",
                "children": []
              },
              {
                "id": "45",
                "name": "D2b",
                "children": []
              },
              {
                "id": "46",
                "name": "D2c",
                "children": []
              }
            ]
          },
          {
            "id": "17",
            "name": "D3",
            "children": [
              {
                "id": "47",
                "name": "D3a",
                "children": []
              },
              {
                "id": "48",
                "name": "D3b",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": "2",
        "name": "A",
        "children": [
          {
            "id": "6",
            "name": "A1",
            "children": [
              {
                "id": "18",
                "name": "A1a",
                "children": []
              },
              {
                "id": "19",
                "name": "A1b",
                "children": []
              }
            ]
          },
          {
            "id": "8",
            "name": "A3",
            "children": [
              {
                "id": "24",
                "name": "A3b",
                "children": []
              },
              {
                "id": "25",
                "name": "A3c",
                "children": []
              },
              {
                "id": "23",
                "name": "A3a",
                "children": []
              }
            ]
          },
          {
            "id": "7",
            "name": "A2",
            "children": [
              {
                "id": "22",
                "name": "A2c",
                "children": []
              },
              {
                "id": "20",
                "name": "A2a",
                "children": []
              },
              {
                "id": "21",
                "name": "A2b",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": "3",
        "name": "B",
        "children": [
          {
            "id": "9",
            "name": "B1",
            "children": [
              {
                "id": "26",
                "name": "B1a",
                "children": []
              },
              {
                "id": "27",
                "name": "B1b",
                "children": []
              }
            ]
          },
          {
            "id": "10",
            "name": "B2",
            "children": [
              {
                "id": "30",
                "name": "B2c",
                "children": []
              },
              {
                "id": "29",
                "name": "B2b",
                "children": []
              },
              {
                "id": "28",
                "name": "B2a",
                "children": []
              }
            ]
          },
          {
            "id": "11",
            "name": "B3",
            "children": [
              {
                "id": "33",
                "name": "B3c",
                "children": []
              },
              {
                "id": "31",
                "name": "B3a",
                "children": []
              },
              {
                "id": "32",
                "name": "B3b",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": "4",
        "name": "C",
        "children": [
          {
            "id": "13",
            "name": "C2",
            "children": [
              {
                "id": "37",
                "name": "C2b",
                "children": []
              },
              {
                "id": "38",
                "name": "C2c",
                "children": []
              }
            ]
          },
          {
            "id": "12",
            "name": "C1",
            "children": [
              {
                "id": "35",
                "name": "C1b",
                "children": []
              },
              {
                "id": "34",
                "name": "C1a",
                "children": []
              }
            ]
          },
          {
            "id": "14",
            "name": "C3",
            "children": [
              {
                "id": "40",
                "name": "C3b",
                "children": []
              },
              {
                "id": "41",
                "name": "C3c",
                "children": []
              },
              {
                "id": "39",
                "name": "C3a",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }

function createDivElement(node) {
    // Create a div for the current node
    const div = document.createElement('div');
    div.id = `node_${node.id}`;
    div.textContent = node.name;
    

    // If the node has children
    if (node.children && node.children.length > 0) {
        node.children.forEach(child => {
            const childDiv = createDivElement(child);
            div.appendChild(childDiv); 
        });
    }

    return div;
}


const treeContainer = document.getElementById('tree-container');
const treeElement = createDivElement(linearData);
treeContainer.appendChild(treeElement);
