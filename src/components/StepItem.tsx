import { useMemo } from 'react'

interface propsTypes {
  step: number
  isCurrStep: boolean
  description: string
}

function StepItem({ step, isCurrStep, description }: propsTypes): JSX.Element {
  const itemNumberClass = useMemo(() => {
    let basicClass = 'step-item__number'
    return isCurrStep ? basicClass + ' step-item__number--active' : basicClass
  }, [isCurrStep])

  return (
    <div className="step-item">
      <div className={itemNumberClass}>{step}</div>
      <div className="step-item__text-container hide-on-mobile">
        <p className="step-item__step">STEP {step}</p>
        <p className="step-item__description">{description}</p>
      </div>
    </div>
  )
}

export default StepItem
