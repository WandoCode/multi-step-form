interface shortPeriodType {
  [key: string]: string
}
const shortPeriod: shortPeriodType = {
  Monthly: 'mo',
  Yearly: 'yr',
}

const formatPrice = (price: number, period = 'Monthly') => {
  return `$${price}/${shortPeriod[period]}`
}

export { formatPrice }
