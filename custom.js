const verifyBtn = document.getElementById("verify-btn");
const loginArea = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction-area")



verifyBtn.addEventListener("click", () => {
    loginArea.style.display = "none";
    transactionArea.style.display = "block";
})

//event handler

const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", () => {

    //took input and changed it to number 
    const depositNumber = getInputNumber("deposit-amount");

    updateSpanText("current-deposit", depositNumber);
    updateSpanText("current-balance", depositNumber);

    //input field will be empty
    document.getElementById("deposit-amount").value = ""

})

//withdraw event handler

const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", () => {
    const withdrawNumber = getInputNumber("withdraw-amount");
    updateSpanText("current-withdraw", withdrawNumber);
    updateSpanText("current-balance", -1 * withdrawNumber)

    document.getElementById("withdraw-amount").value = ""
})


function getInputNumber(id){
    const input = document.getElementById(id).value;
    const inputToNumber = parseFloat(input);
    return inputToNumber;
}


function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}