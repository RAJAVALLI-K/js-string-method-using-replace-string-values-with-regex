
let value='https://teams.microsoft456.com/_#/235modern-calling/';
// let regux=/[0-9,:,//,#,.]/g;
let regux=/[^a-z]/g
let result=value.replace(regux,'');
console.log(result);
