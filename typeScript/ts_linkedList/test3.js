let levels = [
    {
        roomSummary: [{ bedRooms: 3, FullBathRooms: 2 }],
        KitchenAndBathrooms: [
            { RoomType: "FullBathrooms", RoomUpdateStatusType: "NotUpdated", RoomUpdatedTimeframeType: "" },
            { RoomType: "FullBathrooms", RoomUpdateStatusType: "NotUpdated-foo", RoomUpdatedTimeframeType: "" },
            { RoomType: "bedRooms", RoomUpdateStatusType: "NotUpdated-bar", RoomUpdatedTimeframeType: "" }
        ]
    },
    {
        roomSummary: [{ bedRooms: 3, kitchens: 1 }],
        KitchenAndBathrooms: [
            { RoomType: "bedRooms", RoomUpdateStatusType: "NotUpdated-1", RoomUpdatedTimeframeType: "" },
            { RoomType: "kitchens", RoomUpdateStatusType: "Updated", RoomUpdatedTimeframeType: "" }
        ]
    },
    {
        roomSummary: [{ bedRooms: 3 }],
        KitchenAndBathrooms: []
    },
    {
        roomSummary: [{ bedRooms: 1 }],
        KitchenAndBathrooms: [
            { RoomType: "bedRooms", RoomUpdateStatusType: "NotUpdated-3", RoomUpdatedTimeframeType: "" }
        ]
    },
    {
        roomSummary: [{ kitchens: 1 }],
        KitchenAndBathrooms: [
            { RoomType: "kitchens", RoomUpdateStatusType: "NewlyUpdated", RoomUpdatedTimeframeType: "" }
        ]
    },
    {
        roomSummary: [{ bedRooms: 2 }],
        KitchenAndBathrooms: []
    },
    {
        roomSummary: [{ bedRooms: 1 }],
        KitchenAndBathrooms: []
    },
    {
        roomSummary: [{ bedRooms: 2 }],
        KitchenAndBathrooms: []
    },
    {
        roomSummary: [{ bedRooms: 1, FullBathRooms: 2 }],
        KitchenAndBathrooms: [
            { RoomType: "FullBathrooms", RoomUpdateStatusType: "RecentlyUpdated", RoomUpdatedTimeframeType: "" }
        ]
    },
    {
        roomSummary: [{ bedRooms: 1, FullBathRooms: 1 }],
        KitchenAndBathrooms: [
            { RoomType: "FullBathrooms", RoomUpdateStatusType: "RecentlyUpdated-foo", RoomUpdatedTimeframeType: "" }
        ]
    },
    {
        roomSummary: [{ bedRooms: 1, FullBathRooms: 2 }],
        KitchenAndBathrooms: []
    },
    {
        roomSummary: [{ bedRooms: 1, FullBathRooms: 1 }],
        KitchenAndBathrooms: []
    }
];

function dataConvert(inputArray) {

    let result = [{ leveles: [], rooms: [] }];

    inputArray.forEach((level, index) => {

        result[0].leveles.push({ id: index + 1 });

        let check = {};

        level.KitchenAndBathrooms.forEach(KandB => {

            if (check[KandB.RoomType]) {

                check[KandB.RoomType]++;

            } else {

                check[KandB.RoomType] = 1;
            }
        })


        level.roomSummary.forEach(roomSummary => {

            let rooms = Object.keys(roomSummary);
            console.log(rooms)
            let roomsCount = Object.values(roomSummary);
            console.log(roomsCount)
            

            rooms.forEach((room, innerIndex) => {

                while (roomsCount[innerIndex]--) {

                    result[0].rooms.push({

                        level: index + 1,
                        roomType: room,
                    });

                    if (level.KitchenAndBathrooms.length > 0) {
                        const currentLevel = result[0].rooms[result[0].rooms.length - 1];

                        level.KitchenAndBathrooms.forEach(KandB => {
                            if (KandB.RoomType === currentLevel.roomType && check[KandB.RoomType]--) {
                                currentLevel.RoomUpdateStatusType = KandB.RoomUpdateStatusType;
                                currentLevel.RoomUpdatedTimeframeType = KandB.RoomUpdatedTimeframeType;
                            }
                        })
                    }
                }
            });
        });
    });

    console.log(JSON.stringify(result, null, 2));
}

dataConvert(levels);


// [
//     {
//       "leveles": [
//         {
//           "id": 1 
//         },        
//         {
//           "id": 2 
//         },        
//         {
//           "id": 3 
//         },        
//         {
//           "id": 4 
//         },        
//         {
//           "id": 5
//         },
//         {
//           "id": 6
//         },
//         {
//           "id": 7
//         },
//         {
//           "id": 8
//         },
//         {
//           "id": 9
//         },
//         {
//           "id": 10
//         },
//         {
//           "id": 11
//         },
//         {
//           "id": 12
//         }
//       ],
//       "rooms": [
//         {
//           "level": 1,
//           "roomType": "bedRooms",
//           "RoomUpdateStatusType": "NotUpdated-bar",
//           "RoomUpdatedTimeframeType": ""
//         },
//         {"level": 1,"roomType": "bedRooms"},
//         {"level": 1,"roomType": "bedRooms"},
//         {
//           "level": 1,
//           "roomType": "FullBathRooms"
//         },
//         {
//           "level": 1,
//           "roomType": "FullBathRooms",
//           "RoomUpdateStatusType": 'NotUpdated',
//           "RoomUpdatedTimeframeType": ''
//         },
//         {
//             "level": 1,
//             "roomType": "FullBathRooms",
//             "RoomUpdateStatusType": 'NotUpdated-foo',
//             "RoomUpdatedTimeframeType": ''
//         },
//         {
//           "level": 2,
//           "roomType": "bedRooms",
//           "RoomUpdateStatusType": "NotUpdated-1",
//           "RoomUpdatedTimeframeType": ""
//         },
//         {"level": 2,"roomType": "bedRooms"},
//         {"level": 2,"roomType": "bedRooms"},

//         {
//           "level": 2,
//           "roomType": "kitchens",
//           "RoomUpdateStatusType": "Updated",
//           "RoomUpdatedTimeframeType": ""
//         },
//         {"level": 3,"roomType": "bedRooms"},
//         {"level": 3,"roomType": "bedRooms"},
//         {"level": 3,"roomType": "bedRooms"},
//         {
//           "level": 4,
//           "roomType": "bedRooms",
//           "RoomUpdateStatusType": "NotUpdated-3",
//           "RoomUpdatedTimeframeType": ""
//         },
//         {
//           "level": 5,
//           "roomType": "kitchens",
//           "RoomUpdateStatusType": "NewlyUpdated",
//           "RoomUpdatedTimeframeType": ""
//         },
//         {"level": 6,"roomType": "bedRooms"},
//         {"level": 6,"roomType": "bedRooms"},
//         {"level": 7,"roomType": "bedRooms"},
//         {"level": 8,"roomType": "bedRooms"},
//         {"level": 8,"roomType": "bedRooms"},
//         {"level": 9,"roomType": "bedRooms"},
//         {
//           "level": 9,
//           "roomType": "FullBathRooms",
//           "RoomUpdateStatusType": 'RecentlyUpdated',
//           "RoomUpdatedTimeframeType": ''
//         },
//         {"level": 9,"roomType": "FullBathRooms"},
//         {"level": 9,"roomType": "FullBathRooms"},
//         {"level": 10,"roomType": "bedRooms"},
//         {
//           "level": 10,
//           "roomType": "FullBathRooms",
//           "RoomUpdateStatusType": 'RecentlyUpdated-foo',
//           "RoomUpdatedTimeframeType": ''
//         },{"level": 10,"roomType": "FullBathRooms"},
//         {"level": 11,"roomType": "bedRooms"},
//         {"level": 11,"roomType": "FullBathRooms"},
//         {"level": 11,"roomType": "FullBathRooms"},
//         {"level": 12,"roomType": "bedRooms"},
//         {"level": 12,"roomType": "FullBathRooms"}
//       ]
//     }
//   ]









