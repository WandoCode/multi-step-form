import { formatPrice } from '../utility/helpers'

interface PlanSelectLabelProps {
  image: string
  title: string
  price: { [key: string]: number }
  period: string
  tips: string
  id: string
}

function PlanSelectLabel({
  image,
  title,
  price,
  period,
  tips,
  id,
}: PlanSelectLabelProps): JSX.Element {
  const priceStr = formatPrice(price, period)
  return (
    <label htmlFor={id} className="plan-label">
      <img src={image} alt="" />
      <div className="plan-label__text">
        <h2 className="plan-label__h2">{title}</h2>
        <p className="plan-label__subtitle">{priceStr}</p>
        {period === 'Yearly' && <p className="plan-label__tips">{tips}</p>}
      </div>
    </label>
  )
}

export default PlanSelectLabel
