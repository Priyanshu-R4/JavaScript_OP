// ✅ Valid variable names
let $price = 100;        // Can start with $ symbol
let _discount = 20;      // Can start with underscore
let totalAmount = $price - _discount; // camelCase is preferred
console.log(totalAmount); // Output: 80

// ❌ Invalid variable names
// let 1name = "Wrong"; // ❌ Cannot start with a number
// let let = "Reserved"; // ❌ Cannot use reserved keywords

// ✅ Case-sensitive
let Name = "Priyanshu";
let name = "Not Priyanshu";
console.log(Name); // Output: Priyanshu
console.log(name); // Output: Not Priyanshu