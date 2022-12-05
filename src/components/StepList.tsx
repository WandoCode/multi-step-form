import StepItem from './StepItem'
import { useMemo } from 'react'

interface propsTypes {
  currStep: number
}

function StepList({ currStep }: propsTypes): JSX.Element {
  const stepsDescription = ['Your info', 'Select Plan', 'Add-Ons', 'Summary']

  const steps = useMemo(() => {
    return stepsDescription.map((descr, index) => {
      const step = index + 1
      return (
        <StepItem
          key={index}
          step={step}
          isCurrStep={step === currStep}
          description={descr.toUpperCase()}
        />
      )
    })
  }, [currStep])

  return <ol className="step-list">{steps}</ol>
}

export default StepList
