let data = [
    {"id":"14", "name": "Submarine", "parent_id": "8"},
    {"id":"1", "name": "vehicles", "parent_id": "0"},
    {"id":"6", "name": "Hover", "parent_id": "2"},
    {"id":"2", "name": "Fly", "parent_id": "1"},
    {"id":"9", "name": "Four Wheels", "parent_id": "4"},
    {"id":"7", "name": "Afloat", "parent_id": "3"},
    {"id":"4", "name": "Drive", "parent_id": "1"},
    {"id":"11", "name": "plane", "parent_id": "5"},
    {"id":"13", "name": "Ship", "parent_id": "7"},
    {"id":"3", "name": "Sail", "parent_id": "1"},
    {"id":"12", "name": "Helicopter", "parent_id": "6"},
    {"id":"5", "name": "Glide", "parent_id": "2"},
    {"id":"15", "name": "Car", "parent_id": "9"},
    {"id":"8", "name": "Submerged", "parent_id": "3"}
];

let currentParents = ['0'];
let destArray = [];


function copyChildren(currentParents, destArray){
    let newParents = [];

    currentParents.forEach(parentID => {

       let children = data.filter(item =>
            item.parent_id === parentID
       );

       children.forEach(child =>{
        let newChild = {
            id: child.id,
            name : child.name,
            children : []
        };
        destArray.push(newChild);
        newParents.push(child.id);
        copyChildren([child.id],newChild.children)
       })
    });

return newParents

}
copyChildren(currentParents, destArray)
console.log(JSON.stringify(destArray));



function findChildren(parentId) {
    let result = []
    data.forEach(item=>{
        if(item.parent_id === parentId){
            let child = {
                id: item.id,
                name : item.name,
                children : findChildren(item.id)
            }
    result.push(child)
        }
    })
   return result;
}


let hierarchy = findChildren("3");
console.log(JSON.stringify(hierarchy));




   

