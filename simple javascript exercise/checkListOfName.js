function checkName( name){
    let array = ["abdi", "abdu", "fuad", "hamid", "brad putin"]
    if (array.includes(name)){
        alert("welcome");
    }else{
        alert("may be next time");

    }
}
var names = prompt("Enter ur name: ")
checkName(names);

