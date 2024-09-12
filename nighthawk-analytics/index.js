
function getDetailsComponents(aminityCategorytype, amenityType,improvementType, constructionMethod = "", outBuildingType = ""){

    const results = {
        AmenityAreaMeasure: false,
        AmenityCount:false,
        AmenityAttachedToManufacturedHomeIndicator:false,
        SwimmingPoolFeatureType:false


    };
    
    let aminityTypeArray = [ "Balcony", "Porch", "Portico", "Deck", "Patio","Gazebo",  "WoodStove", "IndoorFireplace"]

    if(aminityCategorytype === "WholeHome" && aminityTypeArray.includes(aminityTypeArray) ){
        results.AmenityAreaMeasure = true;
    }

    if((aminityCategorytype ==="WholeHome" && (amenityType === "WoodStove" || amenityType === "IndoorFireplace")) 
        || (aminityCategorytype === "WholeHome" && (amenityType !="WoodStove" && amenityType != "IndoorFireplace" ))){

        results.AmenityCount = true;
    }

    if((improvementType === "Dwelling" && constructionMethod ===  "Manufactured" && (amenityType=== "Porch" || amenityType=== "Portico" || amenityType=== "Deck"  ||   amenityType=== "Gazebo"  )) 
        || (improvementType === "Outbuilding" && outBuildingType ===  "ManufacturedHome"  && (amenityType === "Porch" || amenityType === "Portico" || amenityType === "Deck"||amenityType ===  "Gazebo" ) )){

            results.AmenityAttachedToManufacturedHomeIndicator = true;
        }


}