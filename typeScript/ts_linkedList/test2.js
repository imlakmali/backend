let levels = [
    {
        roomSummary: [{ bedRooms: 1, FullBathRooms: 2 }],
        KitchenAndBathrooms: [
            {
                RoomType: "FullBathroom",
                RoomUpdateStatusType: "NotUpdated",
                RoomUpdatedTimeframeType: "",
            },
            {
                RoomType: "FullBathroom",
                RoomUpdateStatusType: "NotUpdated-foo",
                RoomUpdatedTimeframeType: "",
            },
            {
                RoomType: "bedRooms",
                RoomUpdateStatusType: "NotUpdated-bar",
                RoomUpdatedTimeframeType: "",
            }
        ],
    },
    {
        roomSummary: [{ bedRooms: 2, kitchens: 1 }]
    },
    {
        roomSummary: [{ bedRooms: 2, kitchens: 1,livingRoom:1 }]
    }
]

function convert(inputArray) {
    result = { levels: [], rooms: [] }
    inputArray.forEach((element, index) => {
        result.levels.push({id:index+1});
        for(let e in element){
            element[e].forEach(inElement=>{
                for(let inE in inElement){
                    
                    if(inElement[inE]>0){
                        result.rooms.push( { level: index+1, room_Type: inE });
                        inElement[inE]--  
                    }else{
                        // result.rooms[result.rooms.length-1][inE]=inElement[inE]
                        console.log(result.rooms[result.rooms.length-1]['room_Type'])
                        if(result.rooms[result.rooms.length-1]['room_Type']==inElement[inE]){
                            console.log(inE)
                        }
                        
                    }
                    
                }
            })
           
        }
    });

    return result
}
console.log(convert(levels))
;