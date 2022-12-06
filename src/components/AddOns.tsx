import { useState } from 'react'
import { FormProps, AddonsTypes } from '../types/multiStepFormTypes'
import CustomForm from './CustomForm'

function AddOns({ onGoNext, onGoBack, currDatas }: FormProps): JSX.Element {
  const [choices, setChoices] = useState<string[]>([])

  const title = 'Pick add-ons'
  const description = 'Add-ons help enhance your gaming experience.'

  const submitForm = () => {
    // TODO: Valid form datas and show errors
    const datas: AddonsTypes = {
      choices,
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

export default AddOns
