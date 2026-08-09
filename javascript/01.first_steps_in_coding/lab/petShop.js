function petShop(dogFoodCount, catFoodCount) {
    
    let dogFoodPrice = 2.50;
    let catFoodPrice = 4;

    let totalPrice = (dogFoodCount * dogFoodPrice) + (catFoodCount * catFoodPrice);

    console.log(totalPrice + " lv.");
}

petShop(5,4);
petShop(13,9);