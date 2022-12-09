import React, { useEffect, useState } from 'react'
import { FormProps, AddonsTypes, pricesType } from '../types/multiStepFormTypes'
import AddonItem from './AddonItem'
import CustomForm from './CustomForm'

interface AddonsProps extends FormProps {
  currDatas: AddonsTypes
  period: string
  prices: pricesType
}

function AddOns({
  onGoNext,
  onGoBack,
  currDatas,
  period,
  prices,
  saveData,
}: AddonsProps): JSX.Element {
  const [choices, setChoices] = useState<string[]>([])

  const title = 'Pick add-ons'
  const description = 'Add-ons help enhance your gaming experience.'

  useEffect(() => {
    setChoices(currDatas.choices)
  }, [])

  const submitForm = () => {
    // A validation should be done in backend to check if value has been modified
    const datas: AddonsTypes = {
      choices,
    }

    saveData(datas, 'addOns')
    onGoNext()
  }

  const cancelForm = () => {
    const datas: AddonsTypes = {
      choices,
    }

    saveData(datas, 'addOns')
    onGoBack()
  }

  const handleChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const valueIsInChoices = choices.includes(value)

    let newChoices: string[]

    if (!valueIsInChoices) {
      newChoices = [...choices]
      newChoices.push(value)
    } else {
      newChoices = choices.filter((el) => el !== value)
    }

    setChoices(newChoices)
    return
  }

  return (
    <CustomForm
      title={title}
      description={description}
      onClickNextStep={submitForm}
      onClickPrecStep={cancelForm}
      addClass="addons"
    >
      <div className="form-control">
        <input
          type="checkbox"
          id="online-service"
          value="Online service"
          checked={choices.includes('Online service')}
          onChange={handleChoice}
          className="hide-input"
        />
        <AddonItem
          id="online-service"
          checked={choices.includes('Online service')}
          title="Online service"
          description="Access to multiplayer games"
          period={period}
          price={prices[period]['Online service']}
        />
      </div>
      <div className="form-control">
        <input
          type="checkbox"
          id="larger-storage"
          value="Larger storage"
          checked={choices.includes('Larger storage')}
          onChange={handleChoice}
          className="hide-input"
        />
        <AddonItem
          id="larger-storage"
          checked={choices.includes('Larger storage')}
          title="Larger storage"
          description="Extra 1TB of cloud save"
          period={period}
          price={prices[period]['Larger storage']}
        />
      </div>
      <div className="form-control">
        <input
          type="checkbox"
          id="custom-profil"
          value="Customizable profile"
          checked={choices.includes('Customizable profile')}
          onChange={handleChoice}
          className="hide-input"
        />
        <AddonItem
          id="custom-profil"
          checked={choices.includes('Customizable profile')}
          title="Customizable profile"
          description="Custom theme on your profile"
          period={period}
          price={prices[period]['Customizable profile']}
        />
      </div>
    </CustomForm>
  )
}

export default AddOns
