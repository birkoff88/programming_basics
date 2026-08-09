function depositCalculator(deposit, timeInMonths, interest) {
    let sumInInterest = deposit * (interest / 100);
    let interestForMonth = sumInInterest / 12;
    let finalSum = deposit + timeInMonths * interestForMonth;

    console.log(finalSum);
}


depositCalculator(200,3,5.7);