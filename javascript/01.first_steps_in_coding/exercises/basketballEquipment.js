function basketballEquipment(annualFee) {
    let shoes = annualFee * 0.60;
    let outfit = shoes * 0.80;
    let ball = outfit * 0.25;
    let accessories = ball * 0.20;

    let total = annualFee + shoes + outfit + ball + accessories;

    console.log(total);
}

basketballEquipment(365);