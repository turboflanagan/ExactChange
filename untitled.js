function drawer(price, cash, cid) {
  //parseFloat() is not returning decimals properly. Converting to factor of 100.
  // Convert back by dividing by 100 before returning values.
    price = price * 100;
    cash = cash * 100;

    var change = cash - price;
    var changeLeftToCount = change;  // Sets a var that we will reduce as we count out change, but does not alter the value of the var change.
    var customersChange = [];
    var totalDrawerCash = 0;
    var totalCashInDrawer = checkDrawerCash(cid);

    function checkDrawerCash(cid) {
        var drawerTotal = 0;
        for (i=0; i<cid.length; i++){
            drawerTotal += cid[i][1] * 100; 
            // adds the amount of each demon and adds to drawerTotal 
            // on each iteration through the loop.  * 100 is to add 2 decimal places to each value to use whole numbers
            // until we are ready to convert them back to dollars and cents.
        }
        return drawerTotal; // Returns the sum total dollars and cents of the drawer.
    }

    // Run checkDrawerCash then check to see if we have enough $$ to make change or need to close register.
    if(totalCashInDrawer < change){
        return "Insufficient Funds";
    }else if(totalCashInDrawer == change){
        return "Closed";
    }

    for (i = cid.length - 1; i >= 0; i--) { // Loop through the cid array starting with the highest denom and move to smallest.
                                              // This allows me to get the highest value change first and work down to pennies.
        var currencyName = cid[i][0];  //Index 0 is the name of the currency of the current array. Starting at "ONE HUNDRED".
        var currencyTotal = cid[i][1] * 100;  //Multiply by 100 to remove decimal on cents.
        var currencyValue = getValue(currencyName);  // This plugs currencyName into the getValue function to return the value of that currency.
        var currencyAmount = currencyTotal / currencyValue;  // How many of each denomination we have.
        var toReturn = 0;       

        while (changeLeftToCount >= currencyValue && currencyAmount > 0) { //Keep going while changeLeftToCount is higher than the value of 
                                                                        //the currency we are on. 
            changeLeftToCount -= currencyValue;            // Reduce the changeLeftToCount by the currencyValue each time through.
            currencyAmount--;                              // Reduce the number of these items because we just removed one to give the customer.
            toReturn++;                                    // How many of these items we are returning to the customer.
        }

      
        if (toReturn > 0) { // If there are items of this currency to return, push them to the result array.
            customersChange.push([currencyName, toReturn * (currencyValue / 100)]); // Divide the currencyValue by 100 to set it back to the 
            //proper decimal value.  Multiply this by the number of this currency we are returning to the customer.
        }
    }

    if (checkDrawerCash(customersChange) != change) {
        return 'Insufficient Funds';            
    }
     
    return customersChange;

    function getValue(currency) {
        switch (currency) {
            case 'PENNY':
                return 1;
            case 'NICKEL':
                return 5;
            case 'DIME':
                return 10;
            case 'QUARTER':
                return 25;
            case 'ONE':
                return 100;
            case 'FIVE':
                return 500;
            case 'TEN':
                return 1000;
            case 'TWENTY':
                return 2000;
            case 'ONE HUNDRED':
                return 10000;
        }
    }
}




drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

