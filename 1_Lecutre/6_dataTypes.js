// Primitive Data Types
let name = "Priyanshu";     // String
let age = 22;               // Number
let isStudent = true;       // Boolean
let address = null;         // Null (intentional absence of value)
let phone;                  // Undefined (declared but not assigned)
let bigNumber = 12345678901234567890n; // BigInt (for large integers)
let id = Symbol("id");      // Symbol (unique identifier)

console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof isStudent);  // boolean
console.log(typeof address);    // object (quirk in JS, null is object)
console.log(typeof phone);      // undefined
console.log(typeof bigNumber);  // bigint
console.log(typeof id);         // symbol

// Non-Primitive Data Type
let user = { name: "Priyanshu", age: 22 }; // Object
console.log(typeof user); // object