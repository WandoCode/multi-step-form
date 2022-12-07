interface PlanSelectLabelProps {
  image: string
  title: string
  price: { [key: string]: number }
  period: string
  tips: string
  id: string
}

interface shortPeriodType {
  [key: string]: string
}
function PlanSelectLabel({
  image,
  title,
  price,
  period,
  tips,
  id,
}: PlanSelectLabelProps): JSX.Element {
  const shortPeriod: shortPeriodType = {
    Monthly: 'mo',
    Yearly: 'yr',
  }

  const priceStr = `$${price[period]}/${shortPeriod[period]}`
  return (
    <label htmlFor={id}>
      <img src={image} alt="" />

      <h2 className="h2 h2--label">{title}</h2>
      <p>{priceStr}</p>
      {period === 'Yearly' && <p>{tips}</p>}
    </label>
  )
}

export default PlanSelectLabel
