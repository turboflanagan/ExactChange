function drawer(price, cash, cid) {
  //parseFloat() does not return decimals properly. Convert to a factor of 100.
  // Convert back by dividing by 100 before returning values.
    var priceWithoutDecimal = price * 100;
    var cashWithoutDecimal = cash * 100;

    var changeOwed = cashWithoutDecimal - priceWithoutDecimal;
    var changeLeftToCount = changeOwed;
    var customersChange = [];
    var totalDrawerCash = 0;
    var totalCashInDrawer = checkDrawerCash(cid);
    var startingCashInDrawer = cid;

    function checkDrawerCash(startingCashInDrawer) {
            var drawerTotal = 0;
        for (i=0; i<startingCashInDrawer.length; i++){
            drawerTotal += startingCashInDrawer[i][1] * 100; 
            // adds the amount of each demon and adds to drawerTotal on each iteration through the loop.
            // * 100 is to add 2 decimal places to each value to use whole numbers
            // until we are ready to convert them back to dollars and cents.
        }
            return drawerTotal; 
    }

    // Run checkDrawerCash then check to see if we have enough $$ to make change or need to close register.
    if(totalCashInDrawer < changeOwed){
        return "Insufficient Funds";
    }else if(totalCashInDrawer == changeOwed){
        return "Closed";
    }

    for (i = startingCashInDrawer.length - 1; i >= 0; i--) { // Start at highest denom and move to smallest.
        var currencyName = startingCashInDrawer[i][0];  //Index 0 is the name of the currency of the current array. Starting at "ONE HUNDRED".
        var currencyTotal = startingCashInDrawer[i][1] * 100;  //Multiply by 100 to remove decimal on cents.
        var currencyValue = getValue(currencyName);  
        var quantityOfDenom = currencyTotal / currencyValue;  
        var quantityOfDenomToReturn = 0;       

        while (changeLeftToCount >= currencyValue && quantityOfDenom > 0) { 
            changeLeftToCount -= currencyValue;
            quantityOfDenom--;                              
            quantityOfDenomToReturn++;
        }

      
        if (quantityOfDenomToReturn > 0) { 
            customersChange.push([currencyName, quantityOfDenomToReturn * (currencyValue / 100)]); // Divide the currencyValue by 100 to set it back to the 
            //proper decimal value.  Multiply this by the number of this currency we are returning to the customer.
        }
    }

    if (checkDrawerCash(customersChange) != changeOwed) {
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



//drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);







