function changeChoin(cents){
    var numQuarter=0;
    var numDime=0;
    var numNickel=0;
    var numPenny=0;

    while (cents > 0) {
        if(cents>= 25){
            numQuarter = Math.floor(cents/25)
            cents = cents - 25 * numQuarter;
        }
        if(cents>=10){
            numDime = Math.floor(cents/10)
            cents = cents-10*numDime;
        }
        if(cents>= 5){
            numPenny = Math.floor(cents/5)
            cents = cents-5*numPenny;
        }

    }
    console.log(numQuarter, numDime, numNickel, numPenny)
}

changeChoin(50);

