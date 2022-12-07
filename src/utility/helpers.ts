interface shortPeriodType {
  [key: string]: string
}
type priceType = { [key: string]: number }
const shortPeriod: shortPeriodType = {
  Monthly: 'mo',
  Yearly: 'yr',
}

const formatPrice = (price: priceType, period = 'Monthly') => {
  return `$${price[period]}/${shortPeriod[period]}`
}

export { formatPrice }
