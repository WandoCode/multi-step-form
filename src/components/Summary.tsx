import { useState } from 'react'
import { FormProps, SummaryTypes } from '../types/multiStepFormTypes'
import CustomForm from './CustomForm'

function Summary({ onGoNext, onGoBack, currDatas }: FormProps): JSX.Element {
  const title = 'Finishing up'
  const description = 'Double-check everything looks OK before confirming.'

  const submitForm = () => {
    // TODO: Valid form datas and show errors
    const datas: SummaryTypes = {
      confirm: true,
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
      showConfirmButton={true}
    >
      {}
    </CustomForm>
  )
}

export default Summary
