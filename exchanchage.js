const Result = document.getElementById("result");
const btn = document.getElementById("convert-button");
const currency = new Map([
    ["US Dollars", "USD"],
    ["British Pound", "GBP"],
    ["Euros", "EUR"],
    ["Naira", "NGN"],
    ["Yuan", "CNY"],
    ["Yen", "JPY"],
    ["West Africa CFA", "XOF"],
    ["Cedi", "GHS"],
    ["Rand", "ZAR"]
]);
  

function Exchange() {
    const from = document.getElementById("from-currency-select").value;
    const to = document.getElementById("to-currency-select").value;
    const base = document.getElementById("amount").value.trim(); // Get input value

    if (!currency.has(from) || !currency.has(to)) {
        Result.textContent = "Invalid currency selection.";
        return;
    }

    const first = currency.get(from);
    const second = currency.get(to);

    // Validate input
    if (base === "" || isNaN(base) || parseFloat(base) <= 0) {
        Result.textContent = "Please enter a valid amount.";
        return;
    }

    const url = `https://v6.exchangerate-api.com/v6/17c026b9e9eafc671f513404/latest/${first}`;

    fetch(url)
        .then(response => response.json())
        .then(item => {
            if (item.conversion_rates && item.conversion_rates[second]) {
                const rate = parseFloat(item.conversion_rates[second]);
                const convertedAmount = (parseFloat(base) * rate).toFixed(2);
                Result.textContent = `${base} ${first} = ${convertedAmount} ${second}`;
            } else {
                Result.textContent = "Conversion rate not available.";
            }
        })
        .catch(error => {
            console.error("Error fetching exchange rate:", error);
            Result.textContent = "Error fetching exchange rate.";
        });
}

btn.addEventListener("click", Exchange);
