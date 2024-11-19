// let units = [
//     {"level":1, "roomType":"bedRoom"},
//     {"level":1, "roomType":"bedRoom"},
//     {"level":1, "roomType":"bathRoom"},
//     {"level":2, "roomType":"bedRoom"},
//     {"level":2, "roomType":"bedRoom"},
//     {"level":2, "roomType":"kichen"},
//     {"level":3, "roomType":""}
// ]

// function displayPropertyUnits(data){
//     let levels = [];

//     data.forEach(element => {
//         if(!levels.includes(element.level)){
//             levels.push(element.level);
//         }
//     });

//     console.log(`<PROPERTY_UNIT> `);
//     console.log(`   <LEVELS>` );
//     levels.forEach(level=>{
//         console.log(`       <LEVEL>` );
//         console.log(`           id: ${level}`);
//         console.log(`       </LEVEL>` );
//     });
//     console.log(`   </LEVELS>` );
//     console.log(`<ROOMS>`);
//     data.forEach(room=>{
//         console.log(`   <ROOM>` );
//         console.log(`       level: ${room.level}`);
//         console.log(`       room-Type : ${room.roomType}`);
//         console.log(`   </ROOM>` );
//     })

//     console.log(`</ROOMS>` );
//     console.log("</PROPERTY_UNIT> ");



// }

// displayPropertyUnits(units)


let levels = [

    {roomSummary: [{bedRooms: 2, bathRooms: 1}]},

    {roomSummary: [{bedRooms: 2, kitchens: 1}]}
     
]

function convertLevelsToProprtyUnit(levelsData){

    let uniqueLevels = [];
    let rooms = [];


    levelsData.forEach((level, index)=>{
        uniqueLevels.push({id:index+1})
       
    })
   
    
    levelsData.forEach((level, index)=>{
        let roomSummery = level.roomSummary[0];

        for(let roomType in roomSummery){

            for(let i=0; i< roomSummery[roomType]; i++){
                rooms.push({
                    level: index + 1,
                    room_Type:roomType
                })
            }
        }
    })
   

    return{
        levels: uniqueLevels,
        rooms: rooms
    }


}


function convertResultsToString(resultData){

    // Levels String
    let levelsString = ''
    resultData.levels.forEach(lvl =>{

      levelsString +=   `
       <LEVEL> 
        id: ${lvl.id}     
       </LEVEL>`
    });

   
    // Rooms String
    let roomString = ''
    resultData.rooms.forEach(room=>{

        roomString += `
        <ROOM> 
            Level : ${room.level}  
            room_type : ${room.room_Type} 
        </ROOM>`
    })

    return levelsString + '\n' + roomString
    
}



let result = convertLevelsToProprtyUnit(levels);
console.log(result)
let string = convertResultsToString(result);
console.log(string);








