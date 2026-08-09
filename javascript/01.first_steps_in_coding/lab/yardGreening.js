function yardGreening(m2) {

    const perYard = 7.61;
    rawPrice = m2 * perYard;
    discount = rawPrice * 0.18;
    totalPrice = rawPrice - discount;
    
    console.log("The final price is: "+ totalPrice +" lv.");
    console.log("The discount is: "+ discount+" lv.")
}


yardGreening(550);
yardGreening(150);