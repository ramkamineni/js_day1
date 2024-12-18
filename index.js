let nam = prompt("Enter your name");
let prod = prompt("Enter your product");
let cost = prompt("Enter the cost");
let date = prompt("Enter the day of purchase");
let festie = prompt("Enter the occasion");
let shopping_platform = ("Enter platform");

let obj0 =
{
    username:nam,
    product:prod,
    cost:cost,
    day:date,
    occasion:festie,
    platform:shopping_platform,
}
console.log(`${obj0.username} has purchased a ${obj0.product} which costs ${obj0.cost} on ${obj0.day} on occassion of ${obj0.occasion} in ${obj0.platform}
`)
