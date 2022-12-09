import { periodTypes, pricesType } from '../types/multiStepFormTypes'

interface shortPeriodType {
  [key: string]: string
}
const shortPeriod: shortPeriodType = {
  Monthly: 'mo',
  Yearly: 'yr',
}

const formatPrice = (price: number, period: string) => {
  return `$${price}/${shortPeriod[period]}`
}

const getTotalPrice = (
  prices: pricesType,
  addons: string[],
  plan: string,
  period: periodTypes
) => {
  let planPrice = prices[period][plan]

  return addons.reduce((a, addon) => {
    return a + prices[period][addon]
  }, planPrice)
}

export { formatPrice, getTotalPrice }
