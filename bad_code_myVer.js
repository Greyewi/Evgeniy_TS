function deliveryMethod() {
    // TODO
    var foo = null; // for example
    // TODO
    return foo ? 'overnight' : 'standard';
}
function shipWeight() {
    var id = 'weight';
    var el = document.getElementById(id); // ? how to specify type for html object?
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
        console.log("Shipping to " + addr + " via " + deliveryMethod() + " delivery");
        if (shipWeight() > 100) {
            console.log('WARNING: Oversize package');
        }
    }
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach(function (item) {
            sendEmail(item.trim());
        });
    }
    else {
        sendEmail(emailAddr.trim());
    }
}
