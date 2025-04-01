// Write your solution in this file!
// 1. Declare a global variable 'customerName'
var customerName = 'bob';

// 2. Function to uppercase 'customerName'
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to set 'bestCustomer'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 4. Function to overwrite 'bestCustomer'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare 'leastFavoriteCustomer' constant
const leastFavoriteCustomer = 'John';

// 6. Function that attempts to change 'leastFavoriteCustomer' constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Jane'; // Error: cannot reassign constant
}
