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
    <label htmlFor={id}>
      <div className="addons__check-place">
        {checked && (
          <img
            className="addons__check-mark"
            src={checkMark}
            alt="check-mark icon"
          />
        )}
      </div>
      <div className="addons__text">
        <h2 className="addons_h2">{title}</h2>
        <p className="addons__description">{description}</p>
      </div>
      <div className="addons__price">+{priceStr}</div>
    </label>
  )
}

export default AddonItem
