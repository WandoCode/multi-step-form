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
    formDatas: formDatasTypes,
    formTarget: formTargetType
  ) => {
    saveFormDatas(formDatas, formTarget)

    const newStep = formStep < 4 ? formStep + 1 : 4

    setFormStep(newStep)
  }

  const goToPrecStep = () => {
    const newStep = formStep > 1 ? formStep - 1 : 1
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
      <StepList currStep={formStep} />
      {formStep === 1 && (
        <PersonalInfos
          currDatas={datas.personalInfos}
          onGoNext={goToNextStep}
          onGoBack={goToPrecStep}
        />
      )}
      {formStep === 2 && (
        <SelectPlan
          currDatas={datas.selectPlan}
          onGoNext={goToNextStep}
          onGoBack={goToPrecStep}
        />
      )}
      {formStep === 3 && (
        <AddOns
          currDatas={datas.addOns}
          onGoNext={goToNextStep}
          onGoBack={goToPrecStep}
        />
      )}
      {formStep === 4 && (
        <Summary
          allDatas={datas}
          onGoNext={goToNextStep}
          onGoBack={goToPrecStep}
        />
      )}
      {formStep === 5 && <ThanksScreen />}
    </div>
  )
}

export default MultiStepForm
