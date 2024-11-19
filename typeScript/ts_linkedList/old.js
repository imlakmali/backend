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


function dataCovert(levelsArray){

    const results = [{Levels: [], rooms: []}];

    levelsArray.forEach((levelData, levelIndex )=> {
        // console.log(levelData)

        results[0].Levels.push({
            id: levelIndex+1
        })

        levelData.roomSummary.forEach(roomSummaryData =>{
            // // console.log("+++++++++",roomSummaryData)
            // const roomTypes = Object.keys(roomSummaryData);
            // // console.log("ROOMTYPES",roomTypes)
            // const roomCounts = Object.values(roomSummaryData);
            // // console.log("ROOMCOUNTS", roomCounts)

            // console.log(Object.entries(roomSummaryData))

            Object.entries(roomSummaryData).forEach(([roomType, roomCount])=>{
                // console.log("RT",roomType)
                // console.log("RC",roomCount)
                

                const matchingRooms = levelData.KitchenAndBathrooms.filter(room=> room.RoomType === roomType);
                // console.log("MATCHINGROOM",matchingRoom);
                for (let count = 0; count < roomCount; count++) {
                    const roomEntry = {
                        level: levelIndex + 1,
                        roomType: roomType,
                        
                    };

                    if (count < matchingRooms.length) {  
                        roomEntry.RoomUpdateStatusType = matchingRooms[count].RoomUpdateStatusType;
                        roomEntry.RoomUpdatedTimeframeType = matchingRooms[count].RoomUpdatedTimeframeType;
                }

                results[0].rooms.push(roomEntry);

                   

                    
                }
            })
        })

    });

    console.log(JSON.stringify(results, null, 2));
}

dataCovert(levels)