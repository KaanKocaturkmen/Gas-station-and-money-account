let benzin = 22.25;
let diesel = 24.53;
let lpg = 11.1

const space = '\r\n'

const fuels = "1-Diesel" + space + "2-Benzin" + space + "3-LPG" + space +
    "Choose your fuel type.";
let fuelType = prompt(fuels);
let liter = prompt("How much fuel do you want?");
let money = Number(prompt("How much money do you have?"));
if (fuelType == "1") {
    let bill = diesel * liter
    if (bill < money) {
        alert("transaction successful!" + space + "Amount paid:" + bill +
            space + "Rest of the money:" + (money - bill)) + space;
    } else {
        alert("transaction failed!" + space + "You must have:" + bill + space +
            "You`re money:" + money + space + "Missing amount:" + (bill - money));
    }
}
if (fuelType == "2") {
    let bill1 = benzin * liter
    if (bill1 < money) {
        alert("transaction successful!" + space + "Amount paid:" + bill1 +
            space + "Rest of the money:" + (money - bill1)) + space;
    } else {
        alert("transaction failed!" + space + "You must have:" + bill1 + space +
            "You`re money:" + money + space + "Missing amount:" + (bill1 - money));
    }
} 
if (fuelType == "3") {
    let bill2 = lpg * liter
    if (bill2 < money) { 
        alert("transaction successful!" + space + "Amount paid:" + bill2 +
            space + "Rest of the money:" + (money - bill2)) + space;
    } else {
        alert("transaction failed!" + space + "You must have:" + bill2 + space +
            "You`re money:" + money + space + "Missing amount:" + (bill2 - money));
    }
} else { "Please enter valid fuel type!!" };