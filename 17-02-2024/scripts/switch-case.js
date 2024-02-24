const numberOfDay = 8;
let dayName;

/* if(numberOfDay === 1){
    dayName = "Pazartesi"
}
else if(numberOfDay === 2){
    dayName = "Salı";
}
else if(numberOfDay === 3){
    dayName = "Çarşamba";
}
else if(numberOfDay === 4){
    dayName = "Perşembe";
}
else if(numberOfDay === 5){
    dayName = "Cuma";
}
else if(numberOfDay === 6){
    dayName = "Cumartesi";
}
else if(numberOfDay === 7){
    dayName = "Pazar";
}
else {
    dayName = "Belirsiz bir gün."
}

console.log(dayName) */

// Switch Case

switch(numberOfDay){
    case 1:
        dayName = "Pazartesi";
        break;
    case 2:
        dayName = "Salı";
        break;
    case 3:
        dayName = "Çarşamba";
        break;
    case 4:
        dayName = "Perşembe";
        break;
    case 5:
        dayName = "Cuma";
        break;
    case 6:
        dayName = "Cumartesi";
        break;
    case 7:
        dayName = "Pazar";
        break;
    default:
        dayName = "Belirsiz bir gün.";
        break;
}

console.log(dayName)