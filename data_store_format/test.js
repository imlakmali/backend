function stringToNumber(string){

    return Number(string);

}

function doubleNumber(number){

    return number*number;

}

function main(myStringNum){

    let num = stringToNumber(myStringNum);

    console.log(doubleNumber(num)) ;

}

main('90');