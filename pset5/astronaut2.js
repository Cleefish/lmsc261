function checkLifeSpan(hoursUsed) {

    const maxLifeSpan = 1000;

    if (typeof hoursUsed !== "number" || !Number.isFinite(hoursUsed)) {
        return "Please Enter A Valid Number!";
    }

    if (hoursUsed < 800) {
        return "Suit In Working Condition";
    } else if (hoursUsed < maxLifeSpan) {
        return "Suit Needs Replacement Soon";
    } else {
        return "Suit No Longer Safe To Use!";
    }

}

let hoursUsed = Number(prompt("How many hours used?"));
print(checkLifeSpan(hoursUsed));