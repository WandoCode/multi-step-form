import { useMemo } from 'react'

interface propsTypes {
  step: number
  isCurrStep: boolean
}

function StepItem({ step, isCurrStep }: propsTypes): JSX.Element {
  const itemNumberClass = useMemo(() => {
    let basicClass = 'step-item__number'
    return isCurrStep ? basicClass + ' step-item__number--active' : basicClass
  }, [isCurrStep])

  return (
    <li className="step-item">
      <div className={itemNumberClass}>{step}</div>
    </li>
  )
}

export default StepItem
