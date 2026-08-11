function repainting(nailonNeeded, paintNeeded, liquidNeeded, workersHoursToBeDone){
    const nailonSum = (nailonNeeded + 2) * 1.50;
    const paintSum = (paintNeeded * 1.10) * 14.50;
    const liquidSum = liquidNeeded * 5;
    const bagsSum = 0.40;

    const materialsSum = bagsSum + nailonSum + paintSum + liquidSum;
    const worksersSum = (materialsSum * 0.30) * workersHoursToBeDone;

    let totalSum = materialsSum + worksersSum;
    console.log(totalSum);

}


repainting(10,11,4,8);
