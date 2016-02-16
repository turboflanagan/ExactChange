var currencyValue = [0.01,0.05,0.10,0.25,1,5,10,20,100];
// var drawerStart = [
//     ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], 
//     ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], 
//     ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]
//     ];

function drawer(price, cash, cid) {
  //parseFloat() is not returning decimals properly. Converting to factor of 100.
  // Convert back by dividing by 100 before returning values.
  price = price * 100;
  cash = cash * 100;
  var drawerStart = cid;
  var change = cash - price;

  function checkDrawerCash(cid) {
    totalDrawerCash = 0;  //keep this inside the function to make sure you run the function to get a current totalDrawerCash value.
    for (i=0; i<drawerStart.length; i++){
      totalDrawerCash += drawerStart[i][1] * 100; 
      // adds the amount of each demon and adds to totalDrawerCash 
      // on each iteration through the loop.  * 100 is to add 2 decimal places to each value to use whole numbers
      // until we are ready to convert them back to dollars and cents.
    }
    return totalDrawerCash;
  }

  // Run checkDrawerCash then check to see if we have enough $$ to make change or need to close register.
  if(totalDrawerCash < change){
        return "Insufficient Funds";
      }else if(totalDrawerCash == change){
        return "Closed";
      }
  // console.log(totalDrawerCash);







  function getValue(currency) {
        switch (currency) {
            case 'PENNY':
                return 1;
                break;
            case 'NICKEL':
                return 5;
                break;
            case 'DIME':
                return 10;
                break;
            case 'QUARTER':
                return 25;
                break;
            case 'ONE':
                return 100;
                break;
            case 'FIVE':
                return 500;
                break;
            case 'TEN':
                return 1000;
                break;
            case 'TWENTY':
                return 2000;
                break;
            case 'ONE HUNDRED':
                return 10000;
        }
    }




  // Here is your change, ma'am.
  return drawerStart[3];
}


// function makeChange(change){
//   for (var i = 8; i >= 0; i--) {
//     if(change > currencyValue[i][1] && drawerStart[i][1]){
//       var reducedChange = parseFloat(change - currencyValue[i][1].toFixed(2));  
//       // subtracts the value of the largest denom from change.
//       // var custChange =  
//       // will be the array of denoms returned to customer.
//     }
//   }
// }


drawer(19.50, 20.00, drawerStart);




//************************************************************************************************************
//************************************************************************************************************
//************************************************************************************************************




// Add to drawer the cash from the sale, subtract out the change returned to customer.

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]










