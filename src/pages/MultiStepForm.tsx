import { useState } from 'react'
import AddOns from '../components/AddOns'
import PersonalInfos from '../components/PersonalInfos'
import SelectPlan from '../components/SelectPlan'
import StepList from '../components/StepList'
import Summary from '../components/Summary'
import ThanksScreen from '../components/ThanksScreen'
import {
  FormDatasType,
  formDatasTypes,
  formTargetType,
} from '../types/multiStepFormTypes'

function MultiStepForm(): JSX.Element {
  const [formStep, setFormStep] = useState(1)
  const [datas, setDatas] = useState<FormDatasType>({})

  const goToNextStep = (
    currStep: number,
    formDatas: formDatasTypes,
    formTarget: formTargetType
  ) => {
    saveFormDatas(formDatas, formTarget)

    const newStep = currStep <= 5 ? currStep + 1 : 5
    setFormStep(newStep)
  }

  const goToPrecStep = (currStep: number) => {
    const newStep = currStep > 1 ? currStep - 1 : 1
    setFormStep(newStep)
  }

  const saveFormDatas = (
    formDatas: formDatasTypes,
    formTarget: formTargetType
  ) => {
    const newDatas = { ...datas }
    newDatas[formTarget] = formDatas

    setDatas(newDatas)
  }

  return (
    <div className="multi-step-form">
      <StepList />
      {formStep === 1 && (
        <PersonalInfos
          currDatas={datas.personalInfos}
          onFormSubmit={goToNextStep}
          onGoBack={goToPrecStep}
        />
      )}
      {formStep === 2 && (
        <SelectPlan
          currDatas={datas.selectPlan}
          onFormSubmit={goToNextStep}
          onGoBack={goToPrecStep}
        />
      )}
      {formStep === 3 && (
        <AddOns
          currDatas={datas.addOns}
          onFormSubmit={goToNextStep}
          onGoBack={goToPrecStep}
        />
      )}
      {formStep === 4 && (
        <Summary
          allDatas={datas}
          onFormSubmit={goToNextStep}
          onGoBack={goToPrecStep}
        />
      )}
      {formStep === 5 && <ThanksScreen />}
    </div>
  )
}

export default MultiStepForm
