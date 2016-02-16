var currencyValue = [0.01,0.05,0.10,0.25,1,5,10,20,100];
var drawerStart = [
    ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], 
    ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], 
    ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]
    ];

function drawer(price, cash, cid) {
  var change = [];
  var drawer = cid;
  totalDrawerCash = 0;
  console.log(drawerStart);
  // Here is your change, ma'am.
  change = parseFloat(cash - price);
  for (i=0; i<drawerStart.length; i++){
    totalDrawerCash += parseFloat(drawerStart[i][1].toFixed(2)); 
    // adds the amount of each demon and incriments totalDrawerCash 
    // on each iteration through the loop.  .toFixed sets the number
    // to 2 decimals, but because it turns the number into a string, 
    // we run parseFloat() on it to save it as a number so we can do math on it.
    if(totalDrawerCash < change){
      return("Insufficient Funds");
    }else if(totalDrawerCash == change){
      return("Closed");
    }else{
      return change;
    }
  }
  console.log(totalDrawerCash);
  return drawerStart[3];
}



drawer(19.50, 20.00, drawerStart);













// function drawer(price, cash, cid) {
//   var change = [];
//   var drawer = cid;
//   console.log(drawerStart);
//   // Here is your change, ma'am.
//   change = parseFloat(cash - price);
//   for (i=0; i<drawerStart.length; i++){
//     totalDrawerCash += parseFloat(drawerStart[i][1].toFixed(2)); 
//     // adds the amount of each demon and incriments totalDrawerCash 
//     // on each iteration through the loop.  .toFixed sets the number
//     // to 2 decimals, but because it turns the number into a string, 
//     // we run parseFloat() on it to save it as a number so we can do math on it.
//     if(totalDrawerCash < change){
//       return("Insufficient Funds");
//     }else if(totalDrawerCash == change){
//       return("Closed");
//     }else{
//       return change;
//     }
//   }
//   console.log(totalDrawerCash);
//   return drawerStart[3];
// }




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










