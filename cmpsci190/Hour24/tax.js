function addTax(subtotal, taxRate) {
    let total = subtotal * (1 + (taxRate/100));
    return total;
}