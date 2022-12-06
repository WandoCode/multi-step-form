import { useState } from 'react'
import {
  FormProps,
  periodTypes,
  planTypes,
  SelectPlanTypes,
} from '../types/multiStepFormTypes'
import CustomForm from './CustomForm'

function SelectPlan({ onGoNext, onGoBack, currDatas }: FormProps): JSX.Element {
  const [plan, setPlan] = useState<planTypes>('Arcade')
  const [period, setPeriod] = useState<periodTypes>('Monthly')

  const title = 'Select your plan'
  const description = 'You have the option of monthly or yearly billing.'

  const submitForm = () => {
    // TODO: Valid form datas and show errors
    const datas: SelectPlanTypes = {
      plan,
      period,
    }

    onGoNext(datas, 'selectPlan')
  }

  const cancelForm = () => {
    onGoBack()
  }

  return (
    <CustomForm
      title={title}
      description={description}
      onClickNextStep={submitForm}
      onClickPrecStep={cancelForm}
    >
      {}
    </CustomForm>
  )
}

export default SelectPlan
