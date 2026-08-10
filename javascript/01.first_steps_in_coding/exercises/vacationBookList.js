function vcb(pagesPerBook,pagesPerHour, daysToRead) {
    
    let totalHoursForReading = pagesPerBook / pagesPerHour;
    let totalHoursPerDay = totalHoursForReading / daysToRead;
    
    console.log(totalHoursPerDay);

}


vcb(212,20,2);
vcb(432,15,4);