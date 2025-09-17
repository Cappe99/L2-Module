export class CurrencyManager {
    constructor(baseCurrency = "SEK") {
        this.baseCurrency = baseCurrency
        this.exchangeRates = { [baseCurrency]: 1 }
    }

    async updateRates() {
    const res = await fetch(`https://api.frankfurter.app/latest?from=${this.baseCurrency}`)
    const data = await res.json()
    console.log("API response:", data) 
    this.exchangeRates = data.rates
    this.exchangeRates[this.baseCurrency] = 1
    console.log("Fetched rates:", this.exchangeRates)
}

    convert(amount, toCurrency) {
        if (!this.exchangeRates[toCurrency]) {
            throw new Error(`Exchange rate for ${toCurrency} not available`)
        }
        return amount * this.exchangeRates[toCurrency]
    }
}