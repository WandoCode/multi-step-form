import { useMemo } from 'react'
import { formatPrice } from '../utility/helpers'

interface PlanSelectLabelProps {
  image: string
  title: string
  price: number
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

  const tipsClass = useMemo(() => {
    let className = 'plan-label__tips '
    if (period !== 'Yearly') className += 'plan-label__tips--hide'
    return className
  }, [period])

  return (
    <label htmlFor={id} className="plan-label">
      <img src={image} alt="" />
      <div className="plan-label__text">
        <h2 className="plan-label__h2">{title}</h2>
        <p className="plan-label__subtitle">{priceStr}</p>
        <p className={tipsClass}>{tips}</p>
      </div>
    </label>
  )
}

export default PlanSelectLabel
