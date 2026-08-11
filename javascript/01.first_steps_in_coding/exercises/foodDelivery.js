function foodDelivery(chikenMenu,fishMenu,vegeMenu) {
    const chikenMenuPrice = 10.35;
    const fishMenuPrice = 12.40;
    const vegeMenuPrice = 8.15;
    const deliveryPrice = 2.50;
    
    foodOrderPrice = 
    (chikenMenu * chikenMenuPrice) +
    (fishMenu * fishMenuPrice) +
    (vegeMenu * vegeMenuPrice);

    let desertPrice = foodOrderPrice * 0.20;
    
    let totalPrice = foodOrderPrice + desertPrice + deliveryPrice;
    
    console.log(totalPrice);
}


foodDelivery(2,4,3); //116.2
foodDelivery(9,2,6); //202.72