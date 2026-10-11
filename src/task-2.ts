interface ConvertCurrencyParams{
    amount: number;
    currency: string;
}

function convertCurrency({ amount, currency }: ConvertCurrencyParams) {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 12, currency: 'dirhams' });