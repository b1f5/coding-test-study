const date = new Date();
const yyyy = date.getUTCFullYear();
const mm = (date.getUTCMonth() + 1).toString().padStart(2, "0");
const dd = date.getUTCDate().toString().padStart(2, "0");
console.log(`${yyyy}-${mm}-${dd}`);
