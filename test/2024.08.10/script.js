let foodHierarchy = [
    { id: "0", name: "Food", parent_id: "0" },      // Root node
    { id: "1", name: "Fruits", parent_id: "0" },    // 1st Generation
    { id: "2", name: "Vegetables", parent_id: "0" }, // 1st Generation
    { id: "3", name: "Grains", parent_id: "0" },     // 1st Generation

    { id: "4", name: "Apple", parent_id: "1" },      // 2nd Generation
    { id: "5", name: "Banana", parent_id: "1" },     // 2nd Generation

    { id: "6", name: "Carrot", parent_id: "2" },     // 2nd Generation
    { id: "7", name: "Broccoli", parent_id: "2" },   // 2nd Generation

    { id: "8", name: "Rice", parent_id: "3" },       // 2nd Generation
    { id: "9", name: "Wheat", parent_id: "3" }       // 2nd Generation
];

console.log(foodHierarchy.length);
function sortData(parentId, array) {
   if(array.parent_id ===parentId ){
      return childNode;
   }
    const childNode = array.filter(item => item.parent_id === parentId);
    console.log(childNode);



}



sortData("3", foodHierarchy); 