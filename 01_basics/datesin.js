let myDate = new Date()
console.log(typeof myDate);

console.log(myDate); //2025-01-28T04:45:12.494Z
console.log(myDate.toString()); //Tue Jan 28 2025 04:45:12 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); //Tue Jan 28 2025
console.log(myDate.toTimeString()); //04:45:12 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toLocaleDateString()); //1/28/2025
console.log(myDate.toLocaleString()); //1/28/2025, 4:45:12 AM

console.log(myDate.toLocaleTimeString()); //4:45:12 AM
console.log(myDate.toTimeString()); //04:45:12 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toUTCString()); //Tue, 28 Jan 2025 04:45:12 GMT
console.log(myDate.toJSON()); //2025-01-28T04:47:58.111Z