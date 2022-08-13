const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output-div");

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    let loss = ((initial - current) * quantity);
    let lossPercentage = ((loss/(initial*quantity))*100);

    outputDiv.innerText = `Your Loss Is ${loss} 
And The Loss Percent Is ${lossPercentage}%`;
  } else if (current > initial) {
    let profit = ((current - initial) * quantity);
    let profitPercentage = ((profit/(initial*quantity))*100);

    outputDiv.innerText = `Your Profit Is ${profit} And The Profit Percent Is ${profitPercentage}% `;
  } else if (initial === current) {
    outputDiv.innerText = `No Profit No Loss`;
  }
}



function submitHandler() {
  let ip = Number(initialPrice.value);
  let qty = Number(stockQuantity.value);
  let curr = Number(currentPrice.value);

    if(!ip || !qty || !curr){
      outputDiv.innerText = "Please input all the feild"
    }else if(ip<0 || qty<0 || curr<0){
      outputDiv.innerText = "The Value Should Not Be Negative"
    }
    else{
  calculateProfitAndLoss(ip, qty, curr);
    }
}

submitBtn.addEventListener("click", submitHandler);

