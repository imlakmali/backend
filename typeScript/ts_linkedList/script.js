let levels = [
    {
        roomSummary: [{ bedRooms: 4, FullBathRooms: 2 }],
        KitchenAndBathrooms: [
            { RoomType: "FullBathRooms", RoomUpdateStatusType: "NotUpdated", RoomUpdatedTimeframeType: "" },
            { RoomType: "FullBathRooms", RoomUpdateStatusType: "NotUpdated-foo", RoomUpdatedTimeframeType: "" },
            { RoomType: "bedRooms", RoomUpdateStatusType: "NotUpdated-bar", RoomUpdatedTimeframeType: "" }
        ]
    },
    {
        roomSummary: [{ bedRooms: 1 }],
        KitchenAndBathrooms: []
    },
    {
        roomSummary: [{ bedRooms: 1 }],
        KitchenAndBathrooms: [
            { RoomType: "bedRooms", RoomUpdateStatusType: "NotUpdated-3", RoomUpdatedTimeframeType: "" }
        ]
    },
    {
        roomSummary: [{ bedRooms: 1, FullBathRooms: 2 }],
        KitchenAndBathrooms: [
            
        ]
    },
    {
        roomSummary: [{ bedRooms: 1, FullBathRooms: 1 }],
        KitchenAndBathrooms: [
            

        ]
    }
];

function dataConvert(levelsArray) {

    const result = [{ levels: [], rooms: [] }];

    levelsArray.forEach((levelData, levelIndex) => {
        
        result[0].levels.push({ id: levelIndex + 1 });

        levelData.roomSummary.forEach(roomSummaryData => {

            const roomTypes = Object.keys(roomSummaryData);   // bedroom, fullbathrooms
            const roomCounts = Object.values(roomSummaryData); //4,2

            roomTypes.forEach((roomType, roomTypeIndex) => {
                
                const matchingRooms = levelData.KitchenAndBathrooms.filter(
                    kitchenRoom => kitchenRoom.RoomType === roomType
                );
               
                    
                
                for (let count = 0; count < roomCounts[roomTypeIndex]; count++) {
                    const roomEntry = {
                        level: levelIndex + 1,
                        roomType: roomType
                    };

                    if (count < matchingRooms.length) {  
                            roomEntry.RoomUpdateStatusType = matchingRooms[count].RoomUpdateStatusType;
                            roomEntry.RoomUpdatedTimeframeType = matchingRooms[count].RoomUpdatedTimeframeType;
                    }

                    result[0].rooms.push(roomEntry);
                }
            });
        });
    });

    console.log(JSON.stringify(result, null, 2));
}

dataConvert(levels);


// soter code ----------------

// function dataCovertSortFunction(levelsArray){

//     const results = [{Levels: [], rooms: []}];

//     levelsArray.forEach((levelData, levelIndex )=> {
        

//         results[0].Levels.push({id: levelIndex+1});

//         levelData.roomSummary.forEach(roomSummaryData =>{
            
//             Object.entries(roomSummaryData).forEach(([roomType, roomCount])=>{
                

//                 const matchingRooms = levelData.KitchenAndBathrooms.filter(room=> room.RoomType === roomType);
                
//                 for (let count = 0; count < roomCount; count++) {
//                     const roomEntry = {
//                         level: levelIndex + 1,
//                         roomType: roomType,
                        
//                     };

//                     if (count < matchingRooms.length) {  
//                         roomEntry.RoomUpdateStatusType = matchingRooms[count].RoomUpdateStatusType;
//                         roomEntry.RoomUpdatedTimeframeType = matchingRooms[count].RoomUpdatedTimeframeType;
//                 }

//                 results[0].rooms.push(roomEntry);

                   
     
//                 }
//             })
//         })

//     });

//     console.log(JSON.stringify(results, null, 2));
// }

// dataCovertSortFunction(levels)





