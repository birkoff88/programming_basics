function suppliesForSchool(pens, markers, cleaner, discount) {
    const penPrice = 5.80;
    const markerPrice = 7.20;
    const cleanerPrice = 1.20;

    let totalPrice =
        (pens * penPrice) +
        (markers * markerPrice) +
        (cleaner * cleanerPrice);

    let discountRate = discount / 100;
    let finalPrice = totalPrice - (totalPrice * discountRate);

    console.log(finalPrice);
}
suppliesForSchool(2,3,4,25);
suppliesForSchool(4,2,5,13);