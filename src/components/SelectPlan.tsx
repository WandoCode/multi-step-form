import { useState } from 'react'
import {
  FormProps,
  periodTypes,
  planTypes,
  SelectPlanTypes,
} from '../types/multiStepFormTypes'
import CustomForm from './CustomForm'
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'
import PlanSelectLabel from './planSelectLabel'

interface SelectPlanProps extends FormProps {
  currDatas?: SelectPlanTypes
}

function SelectPlan({
  onGoNext,
  onGoBack,
  currDatas,
}: SelectPlanProps): JSX.Element {
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
      addClass="select-plan"
    >
      <div className="form-control">
        <PlanSelectLabel
          image={arcadeIcon}
          title="Arcade"
          price={{ Monthly: 9, Yearly: 90 }}
          period={period}
          tips="2 months free"
          id="arcade"
        />
        <input
          type="radio"
          name="plan"
          id="arcade"
          onChange={() => setPlan('Arcade')}
          checked={plan === 'Arcade'}
        />

        <PlanSelectLabel
          image={advancedIcon}
          title="Advanced"
          price={{ Monthly: 12, Yearly: 120 }}
          period={period}
          tips="2 months free"
          id="advanced"
        />
        <input
          type="radio"
          name="plan"
          id="advanced"
          onChange={() => setPlan('Advanced')}
          checked={plan === 'Advanced'}
        />

        <PlanSelectLabel
          image={proIcon}
          title="Pro"
          price={{ Monthly: 15, Yearly: 150 }}
          period={period}
          tips="2 months free"
          id="pro"
        />
        <input
          type="radio"
          name="plan"
          id="pro"
          onChange={() => setPlan('Pro')}
          checked={plan === 'Pro'}
        />
      </div>

      <div className="form-control">
        <label htmlFor="monthly">Monthly</label>
        <input
          type="radio"
          name="period"
          id="monthly"
          onChange={() => setPeriod('Monthly')}
          checked={period === 'Monthly'}
        />

        <label htmlFor="yearly">Yearly</label>
        <input
          type="radio"
          name="period"
          id="yearly"
          onChange={() => setPeriod('Yearly')}
          checked={period === 'Yearly'}
        />
      </div>
    </CustomForm>
  )
}

export default SelectPlan
