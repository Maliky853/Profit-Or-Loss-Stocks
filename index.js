const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output-div");

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    let loss = (initial - current) * quantity;
    let lossPercentage = (loss / initial) * 100;

    outputDiv.innerText = `Your Loss Is ${loss} 
And The Loss Percent Is ${lossPercentage}%`;
  } else if (current > initial) {
    let profit = (current - initial) * quantity;
    let profitPercentage = (profit / initial) * 100;

    outputDiv.innerText = `Your Profit Is ${profit} And The Profit Percent Is ${profitPercentage}% `;
  } else if (initial === current) {
    outputDiv.innerText = `Ruko Zara Sabr Karo!`;
  }
}

// calculateProfitAndLoss(100,10,10)
// calculateProfitAndLoss(20,20,100)
// calculateProfitAndLoss(10.10,10)

function submitHandler() {
  let ip = Number(initialPrice.value);
  let qty = Number(stockQuantity.value);
  let curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

submitBtn.addEventListener("click", submitHandler);
