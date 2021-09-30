var purchasePrice = document.querySelector("#purchase-price");
var stocksQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");

var checkBtn = document.querySelector("#check-btn");
var outputBox = document.querySelector("#output");

checkBtn.addEventListener("click", checkHandler);

function checkHandler() {
    var purprice = Number(purchasePrice.value);
    var qty = Number(stocksQuantity.value);
    var currprice = Number(currentPrice.value);

    calculateProfitAndLoss(purprice, qty, currprice);
}

function calculateProfitAndLoss(purchase, quantity, current) {

    if (purchase <= 0 || quantity <= 0 || current <= 0) {
        outputBox.innerText = `Invalid entry,please enter valid digits`;
    } else {
        if (purchase > current) {
            var loss = (purchase - current) * quantity;
            var lossPercentage = loss / (purchase*quantity) * 100;

            showOutput(`Whoops!! Your loss is ${loss} and loss percentage is ${lossPercentage.toFixed(2)}%`);
        } else if (current > purchase) {
            var profit = (current - purchase) * quantity;
            var profitPercentage = profit / (purchase*quantity) * 100;

            showOutput(`Yay!! Your profit is ${profit} and the profit percentage is ${profitPercentage.toFixed(2)}%`);
        } else {
            showOutput(`No pain no gain and no gain no pain`);

        }
    }
}



function showOutput(message) {
    outputBox.innerHTML = message;
}