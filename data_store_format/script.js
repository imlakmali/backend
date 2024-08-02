let data = [
    { "id": "1", "name": "ROOT", "parent_id": "0" },
    { "id": "2", "name": "A", "parent_id": "1" },
    { "id": "3", "name": "B", "parent_id": "1" },
    { "id": "4", "name": "C", "parent_id": "1" },
    { "id": "5", "name": "D", "parent_id": "1" },
    { "id": "6", "name": "A1", "parent_id": "2" },
    { "id": "7", "name": "A2", "parent_id": "2" },
    { "id": "8", "name": "A3", "parent_id": "2" },
    { "id": "9", "name": "B1", "parent_id": "3" },
    { "id": "10", "name": "B2", "parent_id": "3" },
    { "id": "11", "name": "B3", "parent_id": "3" },
    { "id": "12", "name": "C1", "parent_id": "4" },
    { "id": "13", "name": "C2", "parent_id": "4" },
    { "id": "14", "name": "C3", "parent_id": "4" },
    { "id": "15", "name": "D1", "parent_id": "5" },
    { "id": "16", "name": "D2", "parent_id": "5" },
    { "id": "17", "name": "D3", "parent_id": "5" },
    { "id": "18", "name": "A1a", "parent_id": "6" },
    { "id": "19", "name": "A1b", "parent_id": "6" },
    { "id": "20", "name": "A2a", "parent_id": "7" },
    { "id": "21", "name": "A2b", "parent_id": "7" },
    { "id": "22", "name": "A2c", "parent_id": "7" },
    { "id": "23", "name": "A3a", "parent_id": "8" },
    { "id": "24", "name": "A3b", "parent_id": "8" },
    { "id": "25", "name": "A3c", "parent_id": "8" },
    { "id": "26", "name": "B1a", "parent_id": "9" },
    { "id": "27", "name": "B1b", "parent_id": "9" },
    { "id": "28", "name": "B2a", "parent_id": "10" },
    { "id": "29", "name": "B2b", "parent_id": "10" },
    { "id": "30", "name": "B2c", "parent_id": "10" },
    { "id": "31", "name": "B3a", "parent_id": "11" },
    { "id": "32", "name": "B3b", "parent_id": "11" },
    { "id": "33", "name": "B3c", "parent_id": "11" },
    { "id": "34", "name": "C1a", "parent_id": "12" },
    { "id": "35", "name": "C1b", "parent_id": "12" },
    { "id": "36", "name": "C2a", "parent_id": "13" },
    { "id": "37", "name": "C2b", "parent_id": "13" },
    { "id": "38", "name": "C2c", "parent_id": "13" },
    { "id": "39", "name": "C3a", "parent_id": "14" },
    { "id": "40", "name": "C3b", "parent_id": "14" },
    { "id": "41", "name": "C3c", "parent_id": "14" },
    { "id": "42", "name": "D1a", "parent_id": "15" },
    { "id": "43", "name": "D1b", "parent_id": "15" },
    { "id": "44", "name": "D2a", "parent_id": "16" },
    { "id": "45", "name": "D2b", "parent_id": "16" },
    { "id": "46", "name": "D2c", "parent_id": "16" },
    { "id": "47", "name": "D3a", "parent_id": "17" },
    { "id": "48", "name": "D3b", "parent_id": "17" },
    { "id": "49", "name": "D3c", "parent_id": "17" }
  ];
  
  
  let reversedData = data.reverse();

//   console.log("----",reversedData)
  
  let currentParents = ['0'];
  let destArray = [];
  
  function copyChildren(currentParents, destArray) {

  
    currentParents.forEach((parentID) => {

        let children = reversedData.filter((item) => item.parent_id === parentID);  
        
        children.forEach(ele => destArray.push(ele));
        
        copyChildren(children.map(ele => ele.id), destArray);
      });

      
    }

  
  copyChildren(currentParents, destArray);
  console.log(JSON.stringify(destArray, null, 2));
  
