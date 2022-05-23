const verifyBtn = document.getElementById("verify-btn");
const loginArea = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction-area")

//it will redirect to the bank page
verifyBtn.addEventListener("click", () => {
    loginArea.style.display = "none";
    transactionArea.style.display = "block";
})

//deposit button event 
const depositBtn = document.getElementById("deposit-btn");

depositBtn.addEventListener("click", function(){    
    const depositNumber = inputToNum("deposit-amount");

    updateSpanText("current-deposit", depositNumber);
    updateSpanText("current-balance", depositNumber);

    document.getElementById("deposit-amount").value = "";
    
})

//withdraw button event
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = inputToNum("withdraw-amount")

    updateSpanText("current-withdraw", withdrawNumber);
    updateSpanText("current-balance", -1 * withdrawNumber); //because the amount will be reducted from balance

    document.getElementById("withdraw-amount").value = "";
    
})

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNum = parseFloat(current);
    const total = currentNum + depositNumber;
    document.getElementById(id).innerText = total;
}

function inputToNum(id){
    const input = document.getElementById(id).value;
    const inputToNum = parseFloat(input);
    return inputToNum;
}