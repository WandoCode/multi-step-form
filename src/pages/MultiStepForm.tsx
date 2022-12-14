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
  onGoBackType,
} from '../types/multiStepFormTypes'

const initalFormDatas: FormDatasType = {
  personalInfos: {
    name: '',
    email: '',
    phone: '',
  },
  addOns: {
    choices: [],
  },
  selectPlan: {
    plan: 'Arcade',
    period: 'Monthly',
  },
  summary: {
    confirm: false,
  },
}

const prices = {
  Monthly: {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
    'Online service': 1,
    'Larger storage': 2,
    'Customizable profile': 2,
  },
  Yearly: {
    Arcade: 90,
    Advanced: 120,
    Pro: 150,
    'Online service': 10,
    'Larger storage': 20,
    'Customizable profile': 20,
  },
}

function MultiStepForm(): JSX.Element {
  const [formStep, setFormStep] = useState(1)
  const [datas, setDatas] = useState<FormDatasType>(initalFormDatas)

  const goToNextStep = () => {
    const newStep = formStep < 5 ? formStep + 1 : 5

    setFormStep(newStep)
  }

  const goToPrecStep = (forceStep?: onGoBackType) => {
    if (forceStep) return setFormStep(forceStep)

    const newStep = formStep > 1 ? formStep - 1 : 1
    setFormStep(newStep)
  }

  const saveFormDatas = (
    formDatas: formDatasTypes,
    formTarget: formTargetType
  ) => {
    const newDatas = { ...datas }
    newDatas[formTarget] = formDatas as any

    setDatas(newDatas)
  }

  return (
    <div className="multi-step-form">
      <StepList currStep={formStep < 5 ? formStep : 4} />

      {formStep === 1 && (
        <PersonalInfos
          currDatas={datas.personalInfos}
          onGoNext={goToNextStep}
          onGoBack={goToPrecStep}
          saveData={saveFormDatas}
        />
      )}

      {formStep === 2 && (
        <SelectPlan
          currDatas={datas.selectPlan}
          onGoNext={goToNextStep}
          onGoBack={goToPrecStep}
          prices={prices}
          saveData={saveFormDatas}
        />
      )}

      {formStep === 3 && (
        <AddOns
          currDatas={datas.addOns}
          onGoNext={goToNextStep}
          onGoBack={goToPrecStep}
          prices={prices}
          period={datas.selectPlan.period}
          saveData={saveFormDatas}
        />
      )}

      {formStep === 4 && (
        <Summary
          allDatas={datas}
          onGoNext={goToNextStep}
          onGoBack={goToPrecStep}
          prices={prices}
          saveData={saveFormDatas}
        />
      )}

      {formStep === 5 && <ThanksScreen />}
    </div>
  )
}

export default MultiStepForm
