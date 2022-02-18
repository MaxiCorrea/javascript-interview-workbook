let price = 100;
try {
    price / discount;
    console.log(price);
} catch(err) {
    console.log(`${err.name} - ${err.message}`);
}