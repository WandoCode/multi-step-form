import checkMark from '../assets/images/icon-checkmark.svg'
import { formatPrice } from '../utility/helpers'

interface AddonItemTypes {
  id: string
  title: string
  description: string
  period?: string
  price: { [key: string]: number }
  checked: boolean
}
function AddonItem({
  id,
  title,
  description,
  period,
  price,
  checked,
}: AddonItemTypes): JSX.Element {
  const priceStr = formatPrice(price, period)

  return (
    <label htmlFor={id} className="addon-item">
      <div className="addon-item__check">
        {checked && (
          <img
            className="addon-item__check-mark"
            src={checkMark}
            alt="check-mark icon"
          />
        )}
      </div>
      <div className="addon-item__text">
        <h2 className="addon-item__h2">{title}</h2>
        <p className="addon-item__description">{description}</p>
      </div>
      <div className="addon-item__price">+{priceStr}</div>
    </label>
  )
}

export default AddonItem
