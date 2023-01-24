var arrayofNames =["abdu", "dad", "mam", "hamid", "hakim", "roba", "feta"];
function abuyerIs(array){
    return array[Math.floor(Math.random() * array.length)];
}

abuyerIs(arrayofNames);