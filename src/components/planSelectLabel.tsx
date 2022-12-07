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
    <label htmlFor={id} className="plan-label">
      <img src={image} alt="" />
      <div className="plan-label__text">
        <h2 className="plan-label__h2">{title}</h2>
        <p className="plan-label__subtitle">{priceStr}</p>
        {period === 'Yearly' && <p>{tips}</p>}
      </div>
    </label>
  )
}

export default PlanSelectLabel
