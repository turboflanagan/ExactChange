

//Find change amount. change = Cash - price
// convert change to decimal. parseFloat()
//Return the string "Insufficient Funds" if 
//cash-in-drawer is less than the change due.
// Sum up cash-in-drawer to compare with changeDue/
//Return the string "Closed" if cash-in-drawer 
//is equal to the change due.




// parseFloat() and .toFixed are not returning floats to 2 decimal places as expected.
// Switching to a multiple of 100 to remove the decimals for change.  Divide by 100 before
// returning the values.





//Otherwise, return change in coin and bills, 
//sorted in highest to lowest order.
//---------------------------------------------------

//compare change to each index in drawerStart array.
//When change is < the value of current array index, 
	//subtract array index value from the index and add 
	//it to change due.
	//Push it to a change array to return to the customer.
	//Repeat until change is 0.
	//Return the new change array.



//----------------------------------------------------
//Compare change to currencyValue to determine highest possible denom to make
//change.  Subtract that currencyValue amount from change until change is less
//than currencyValue amount.   Proceed to next lower currencyValue index.
