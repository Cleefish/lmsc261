const conesSoldPerHour = 10;
for(let i = 1; i <= 12; i++){
    print(conesSoldPerHour * i + " sold at hour " + i);
    let inventory = 150;
    print(inventory - conesSoldPerHour * i + " left ");
}