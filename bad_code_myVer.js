function deliveryMethod(addr) {
    // TODO
    return addr ? 'overnight' : 'standard';
}
function shipWeight() {
    var id = 'weight';
    var el = document === null || document === void 0 ? void 0 : document.getElementById(id); // ? how to specify type for html object?
    if (!el) {
        return 0;
    }
    else {
        var elData = el.textContent; // ! Property 'textContent' does not exist on type 'object'
        return parseInt(elData);
    }
}
function sendUpdates(emailAddr) {
    function sendEmail(addr) {
        return "Shipping to " + addr + " via " + deliveryMethod(addr) + " delivery";
        if (shipWeight() > 100) {
            return 'WARNING: Oversize package';
        }
    }
    if (Array.isArray(emailAddr)) {
        return emailAddr.map(function (item) {
            return sendEmail(item.trim());
        });
    }
    else {
        return sendEmail(emailAddr.trim());
    }
}
console.log(sendUpdates("Pikulki 56"));
console.log(sendUpdates(["Pikulki 56"]));
