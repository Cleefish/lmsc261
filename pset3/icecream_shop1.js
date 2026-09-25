const priceOfIceCream = 5;
let paymentRecieved = prompt("Please insert money:");
let isPaymentEnough = paymentRecieved >= priceOfIceCream;

if(isPaymentEnough){
    print("Thanks! Enjoy the ice cream!");

    if (paymentRecieved > priceOfIceCream){
        let change = paymentRecieved - priceOfIceCream;
        print("Here's your change: " + change);
    }

}else{
    print("Sorry! Not enough cash!");
}